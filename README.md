# Gatsby w/ Google Docs as CMS Experiment

1) Motivation: My motivation for this experiment is bridging the gap between CMS and non-technical users(marketing team, project managers, clients, etc ...). In many cases, the hypothetical gains of a CMS layer that allows non-technical users to edit, create, and manage content is wrecked by a poor architectural interface and/or by the CMS's interface learning curve. This often end up in developers being the ones that use the CMS where that advanvange is largely meant for the non-technical user to be in control of their content.

2) Solution: Teams already use google drive as part of their infrastructure, and something people use in general in their everyday life. Hence, there's no learning curve, and the artchitectural interface would just build on what Google Docs already stablished succesfully as its foundation. 

TODO:
- Figuring out a the criteria for a set of actions that should trigger a rebuild. (Ex: google-docs saves automatically, I wouldn't want to trigger a build on every google docs save, it would happen to often and might not be stable).
- Webhook for trigerring re-build after an element in some set of actions happens.

Link: https://elegant-bhaskara-2c7d83.netlify.com/
