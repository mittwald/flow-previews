import{s as r,c as D,P as s,a as F}from"./PasswordCreationField-BYUKXQ9j.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as x}from"./Label-C-aczTYm.js";import{a as C}from"./chunk-454WOBUV-CM0pFb8Z.js";import{$ as w}from"./Form-yihfkm38.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./flowComponent-BqZrLudx.js";import"./index-BMdlDBjA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormField.module-DHQpNdM-.js";import"./IconApp-COwJ0ZRR.js";import"./IconWarning-CBdDJmJC.js";import"./Button-ETWxWgqR.js";import"./Wrap-DQq6jo70.js";import"./Text-DrKyKMJq.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-DkFxhH4d.js";import"./utils-Ca6JWPXc.js";import"./LoadingSpinner-BB5hHLYh.js";import"./useLocalizedStringFormatter-QuGsJjbc.js";import"./Button-DB69cHYY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-OJvPCLGe.js";import"./usePress-DiyYDbeg.js";import"./Action-CQarenSX.js";import"./context-D6OB3BUw.js";import"./useSelector-D7b7Gg7N.js";import"./ContextualHelpTrigger-3ZwWFZCz.js";import"./PopoverTrigger-CPc_PWRs.js";import"./OverlayTrigger-05SHITif.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BxlO7pa5.js";import"./number-nHrFdSb-.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-DZAGVQVL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-BF1ug10U.js";import"./Heading-BOKzrxeE.js";import"./FieldDescription-CGzCV37F.js";import"./TextField-DlniDS2c.js";import"./Input-DrqkB9m8.js";import"./useFormReset-DlrFI1sj.js";import"./Label-D27JuWFB.js";import"./Group-CctDJj_x.js";import"./v4-CQkTLCs1.js";import"./useLabel-D8UVq-XF.js";const T={minComplexity:3,rules:[{ruleType:r.length,min:8,max:12},{ruleType:r.sequence,sequences:[D.number],maxLength:2},{ruleType:r.regex,pattern:"[A-B]",min:1,max:2},{ruleType:r.hibp},{identifier:"special",ruleType:r.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:r.charPool,charPools:["numbers"],min:1,max:2},{ruleType:r.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Fr={title:"Form Controls/PasswordCreationField",component:s,render:m=>e.createElement(s,{onChange:C("onChange"),...m},e.createElement(x,null,"Password"))},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},a={render:()=>{const m=F.fromDeclaration(T);return e.createElement(w,{onSubmit:()=>{}},e.createElement(s,{validationPolicy:m},e.createElement(x,null,"Password")))}};var p,n,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var P,g,h;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Cr=["Default","Disabled","Required","WithForm"];export{o as Default,t as Disabled,i as Required,a as WithForm,Cr as __namedExportsOrder,Fr as default};
