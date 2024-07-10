import{s as r,c as C,P as s,I as D}from"./PasswordCreationField-C-KO98uO.js";import{R as e}from"./index-BwDkhjyp.js";import{L as x}from"./Label-19OEyuih.js";import{a as F}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{$ as w}from"./Form-CL2fRmNo.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./flowComponent-arII6e68.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormField.module-DR_kdvFm.js";import"./IconApp-DBpcl0fC.js";import"./IconWarning-BftDN5EW.js";import"./Button-D6AAkLLn.js";import"./Wrap-DQq6jo70.js";import"./Text-9sk1yuEP.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-BuIyiEeX.js";import"./utils-B-mS0hjG.js";import"./LoadingSpinner-flulPeUb.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./Button-C6BAnfYv.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CtcwBWSa.js";import"./usePress-C1ab-RBW.js";import"./Action-DWWIxyP-.js";import"./context-CzxCD9gm.js";import"./useSelector-5Wd8CZ0x.js";import"./ContextualHelpTrigger-DPf4qq1Q.js";import"./PopoverTrigger-DJ-VldBS.js";import"./OverlayTrigger-Kx2AxGL_.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CQIUSZWS.js";import"./number-nHrFdSb-.js";import"./useControlledState-C0C-dzuH.js";import"./FocusScope-Bimv_uf0.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-ZyvE9T3T.js";import"./Heading-CWJy5QRX.js";import"./FieldDescription-C6NwozVR.js";import"./TextField-BNwOvocl.js";import"./Input-DSzdqNHR.js";import"./useFormReset-CfqvoD0r.js";import"./Label-BdwIGkgY.js";import"./Group-Z2bDE6Db.js";import"./v4-CQkTLCs1.js";import"./useLabel-BaXqGmeE.js";const T={minComplexity:3,rules:[{ruleType:r.length,min:8,max:12},{ruleType:r.sequence,sequences:[C.number],maxLength:2},{ruleType:r.regex,pattern:"[A-B]",min:1,max:2},{ruleType:r.hibp},{identifier:"specialChars",ruleType:r.charPool,charPools:["special"],min:1,max:2},{identifier:"numberChars",ruleType:r.charPool,charPools:["numbers"],min:1,max:2},{ruleType:r.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Dr={title:"Form Controls/PasswordCreationField",component:s,render:m=>e.createElement(s,{onChange:F("onChange"),...m},e.createElement(x,null,"Password"))},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},a={render:()=>{const m=D.fromDeclaration(T);return e.createElement(w,{onSubmit:()=>{}},e.createElement(s,{validationPolicy:m},e.createElement(x,null,"Password")))}};var p,n,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,h,P;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(P=(h=a.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};const Fr=["Default","Disabled","Required","WithForm"];export{o as Default,t as Disabled,i as Required,a as WithForm,Fr as __namedExportsOrder,Dr as default};
