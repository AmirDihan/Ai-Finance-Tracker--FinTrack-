import { sendEmail } from "@/actions/send-email";
import EmailTemplate from "@/emails/template";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    // Get the first budget with user
    const budget = await db.budget.findFirst({
      include: {
        user: {
          include: {
            accounts: {
              where: { isDefault: true },
            },
          },
        },
      },
    });

    if (!budget) {
      return Response.json(
        { error: "No budget found. Create a budget first." },
        { status: 404 }
      );
    }

    const defaultAccount = budget.user.accounts[0];
    if (!defaultAccount) {
      return Response.json(
        { error: "User has no default account" },
        { status: 400 }
      );
    }

    // Calculate expenses for current month
    const startDate = new Date();
    startDate.setDate(1);

    const expenses = await db.transaction.aggregate({
      where: {
        userId: budget.userId,
        accountId: defaultAccount.id,
        type: "EXPENSE",
        date: { gte: startDate },
      },
      _sum: { amount: true },
    });

    const totalExpenses = expenses._sum.amount?.toNumber() || 0;
    const budgetAmount = budget.amount.toNumber
      ? budget.amount.toNumber()
      : parseFloat(budget.amount);
    const percentageUsed = (totalExpenses / budgetAmount) * 100;

    console.log(
      `[Test] Sending alert - Expenses: $${totalExpenses}, Budget: $${budgetAmount}, Used: ${percentageUsed.toFixed(2)}%`
    );

    // Send test email
    const emailResult = await sendEmail({
      to: budget.user.email,
      subject: `⚠️ Budget Alert: You've exceeded 50% of your budget for ${defaultAccount.name}`,
      react: EmailTemplate({
        userName: budget.user.name,
        type: "budget-alert",
        data: {
          percentageUsed: percentageUsed.toFixed(2),
          budgetAmount: budgetAmount.toFixed(2),
          totalExpenses: totalExpenses.toFixed(2),
          accountName: defaultAccount.name,
        },
      }),
    });

    console.log(`[Test] Email sent:`, emailResult);

    return Response.json({
      success: true,
      message: "Test email sent",
      data: {
        budget: budget.id,
        user: budget.user.email,
        percentageUsed: percentageUsed.toFixed(2),
        totalExpenses: totalExpenses.toFixed(2),
        budgetAmount: budgetAmount.toFixed(2),
      },
      emailResult,
    });
  } catch (error) {
    console.error("[Test] Error:", error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
