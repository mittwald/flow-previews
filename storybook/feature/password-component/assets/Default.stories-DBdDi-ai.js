import{s as e,c as D,P as s,a as E}from"./PasswordCreationField-SSg39EQW.js";import{R as r}from"./index-uCp2LrAq.js";import{L as C}from"./Label-BTedSu1I.js";import{a as n}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./IconApp-DWya8WHB.js";import{a as F}from"./IconWarning-CVIujYNc.js";import{B as w}from"./Button-D6GiwIW_.js";import{$ as T}from"./Form-pLdcVy8a.js";import{A as q}from"./Action-CAcZ0_fm.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./flowComponent-Cll4pGCY.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormField.module-BYarEUJD.js";import"./ContextualHelpTrigger-Cy6whg8f.js";import"./PopoverTrigger-C23yS8da.js";import"./OverlayTrigger-CInB0dMO.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-B_2Pd_cl.js";import"./useFocusable-B1CfUGG-.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Bpx1Gtyq.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Bc78XfGJ.js";import"./FocusScope-CBGue2Od.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CVANJuSe.js";import"./context-CSQJgabl.js";import"./useSelector-DpPpxyR7.js";import"./Heading-BCjHoBHi.js";import"./Text-Dgrf8S-7.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-3FUNhTNc.js";import"./FieldDescription-DwIkflUx.js";import"./TextField-BGn1ZlWC.js";import"./Input-CK4H1fha.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BzjXWGX7.js";import"./Group-wsZAgwAS.js";import"./v4-CQkTLCs1.js";import"./LoadingSpinner-xMX5UQ9s.js";import"./Button-DvIckO9Z.js";import"./useLabel-D9TuMkUI.js";const R={minComplexity:3,rules:[{ruleType:e.length,min:8,max:12},{ruleType:e.sequence,sequences:[D.number],maxLength:2},{ruleType:e.regex,pattern:"[A-B]",min:1,max:2},{ruleType:e.hibp},{identifier:"specialChars",ruleType:e.charPool,charPools:["special"],min:1,max:2},{identifier:"numberChars",ruleType:e.charPool,charPools:["numbers"],min:1,max:2},{ruleType:e.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},wr={title:"Form Controls/PasswordCreationField",component:s,render:m=>r.createElement(s,{onChange:n("onChange"),...m},r.createElement(C,null,"Password"),r.createElement(q,{action:n("customButton")},r.createElement(w,{slot:"button",size:"m","aria-label":"Add "},r.createElement(F,null))))},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},a={render:()=>{const m=E.fromDeclaration(R);return r.createElement(T,{onSubmit:()=>{}},r.createElement(s,{validationPolicy:m},r.createElement(C,null,"Password")))}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
