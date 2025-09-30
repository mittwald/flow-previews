import{r as q,j as r}from"./iframe-CxmXe-_O.js";import{P as m}from"./PasswordCreationField-DgfMcKxM.js";import{L as u}from"./Label-DeDEMxfU.js";import{B as y}from"./Button-DVo7WD-1.js";import{p as E}from"./IconWarning-DZNLduw-.js";import{C as v}from"./CopyButton-BBoQAdqq.js";import"./index-Cun1SEai.js";import"./dynamic-5AyxyhbL.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./clsx-B-dksMZM.js";import"./FieldError-D8IUoOjD.js";import"./utils-Cd13syVz.js";import"./Text-DV04N56Q.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-S-iYjqxn.js";import"./useFocusRing-D7TcncFW.js";import"./useFocus-BpzuXZ8X.js";import"./Input-c2pTqiZe.js";import"./Hidden-fABZRyqD.js";import"./TextField-C2jAMHQX.js";import"./context-DGTiufFM.js";import"./Form-CZOHyRg1.js";import"./Label-2vh9UW-y.js";import"./useTextField-BOucmztC.js";import"./useFormReset-CB0PL74l.js";import"./useControlledState-y5DploKZ.js";import"./useFocusable-CZtfPtCy.js";import"./useFormValidation-D2bFAqKZ.js";import"./FormField.module-CqWyJNQI.js";import"./Action-CKP9QlTZ.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./browser-fsrkaBj_.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./FieldError-CSErn7mI.js";import"./FieldDescription-Dm0WW9cG.js";import"./Text-BT2KT2kR.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./Tooltip-BVIfvhPi.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./ProgressBar-FqWf0sr1.js";import"./context-BaUvMDTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./ReactAriaControlledValueFix-Bia0_yWL.js";import"./ContextualHelpTrigger-DamsQCXh.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./Button-DXwv69Ey.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIfsm19n.js";import"./RSPContexts-RLIssCdn.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Heading-BYEzDO2o.js";import"./Heading-CGtduReE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-B4k231vh.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./react-children-utilities-BpOYc3hK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=q.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(y,{children:r.jsx(E,{})})]})},p={render:o=>{const[n,d]=q.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(v,{text:n})]})}};var h,g,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var w,P,x;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(P=e.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var j,B,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var b,f,D;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(f=a.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var R,_,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var L,O,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const Xr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,Xr as __namedExportsOrder,Qr as default};
