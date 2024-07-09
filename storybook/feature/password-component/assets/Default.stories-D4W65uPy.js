import{s as e,c as D,P as s,I as E}from"./PasswordCreationField-BgJ2Bq1N.js";import{R as r}from"./index-BwDkhjyp.js";import{L as C}from"./Label-1LVMR3ux.js";import{a as n}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./IconApp-Rpgm6RsJ.js";import{a as F}from"./IconWarning-B2iaes-f.js";import{B as w}from"./Button-35pCrNCZ.js";import{$ as T}from"./Form-CL2fRmNo.js";import{A as q}from"./Action-Dz1KgLbV.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./flowComponent-AS0Hu7py.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormField.module-BbVpug7o.js";import"./ContextualHelpTrigger-dgLH3EjJ.js";import"./PopoverTrigger-BqV1qz4C.js";import"./OverlayTrigger-CAl_vZvt.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CQIUSZWS.js";import"./useFocusable-CtcwBWSa.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C1ab-RBW.js";import"./FocusScope-Bimv_uf0.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-ZyvE9T3T.js";import"./context-DoCmQP3a.js";import"./useSelector-BZxe7lyr.js";import"./Heading-BpDAxACS.js";import"./Text-DSN33OXK.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-BuIyiEeX.js";import"./FieldDescription-DmfHWucp.js";import"./TextField-BNwOvocl.js";import"./Input-DSzdqNHR.js";import"./useFormReset-CfqvoD0r.js";import"./Label-BdwIGkgY.js";import"./Group-Z2bDE6Db.js";import"./v4-CQkTLCs1.js";import"./LoadingSpinner-Dmul2awi.js";import"./Button-C6BAnfYv.js";import"./useLabel-BaXqGmeE.js";const R={minComplexity:3,rules:[{ruleType:e.length,min:8,max:12},{ruleType:e.sequence,sequences:[D.number],maxLength:2},{ruleType:e.regex,pattern:"[A-B]",min:1,max:2},{ruleType:e.hibp},{identifier:"specialChars",ruleType:e.charPool,charPools:["special"],min:1,max:2},{identifier:"numberChars",ruleType:e.charPool,charPools:["numbers"],min:1,max:2},{ruleType:e.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},wr={title:"Form Controls/PasswordCreationField",component:s,render:m=>r.createElement(s,{onChange:n("onChange"),...m},r.createElement(C,null,"Password"),r.createElement(q,{action:n("customButton")},r.createElement(w,{slot:"button",size:"m","aria-label":"Add "},r.createElement(F,null))))},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},a={render:()=>{const m=E.fromDeclaration(R);return r.createElement(T,{onSubmit:()=>{}},r.createElement(s,{validationPolicy:m},r.createElement(C,null,"Password")))}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(d=t.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var f,y,P;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(P=(y=i.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    return <Form onSubmit={() => {
      // do nothing
    }}>
        <PasswordCreationField validationPolicy={policy}>
          <Label>Password</Label>
        </PasswordCreationField>
      </Form>;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Tr=["Default","Disabled","Required","WithForm"];export{o as Default,t as Disabled,i as Required,a as WithForm,Tr as __namedExportsOrder,wr as default};
