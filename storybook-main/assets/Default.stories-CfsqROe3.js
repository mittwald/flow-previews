import{r as M,j as r}from"./iframe-CIFTXvjr.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BpWFDzJs.js";import{L as P}from"./Label-g6wSh2J1.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-CwxbAihU.js";import{s as Y}from"./Action-BVHKAxgY.js";import{B as h}from"./Button-mCzyv81-.js";import{q as Z}from"./IconWarning-DOS6fKaS.js";import{C as G}from"./CopyButton-B_PqoMHe.js";import"./dynamic-CQYecVWB.js";import"./PropsContextProvider-D8FrEhfs.js";import"./mergeRefs-DjWFnZ8i.js";import"./index-Dlo5KsFa.js";import"./clsx-B-dksMZM.js";import"./FieldError-CLAhwXWc.js";import"./utils-B5Zvs6iw.js";import"./Text-BPQdMqSt.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Hjqv-RBg.js";import"./Hidden-e3oWxUP9.js";import"./useFocusRing-aMk3Od29.js";import"./useFocus-D52c6dYL.js";import"./TextField-DRuiN1lA.js";import"./Form-OgeH3cHd.js";import"./useLabel-Cf99fLdV.js";import"./Label-TO4TYfDU.js";import"./useTextField-B5q8s_6j.js";import"./useFormReset-Bo2I_rci.js";import"./useControlledState-D08Ut7L5.js";import"./useFocusable-CisfjoMT.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bs2voh_v.js";import"./FieldDescription-DpShME1e.js";import"./Text-B8fPWk55.js";import"./browser-DnisE1zj.js";import"./EmulatedBoldText-DkBtsyA4.js";import"./Tooltip-ClLAenzT.js";import"./ClearPropsContextView-D1vlL0dH.js";import"./ProgressBar-CDKMY4TF.js";import"./context-CJ6VsYI4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D9xMhbzt.js";import"./ReactAriaControlledValueFix-Y0n0HC0f.js";import"./ContextualHelpTrigger-B0zkQtAk.js";import"./Popover-D3VR88Of.js";import"./DialogTriggerView-DF7dHF7c.js";import"./context-u0ncZylp.js";import"./useStatic-DkYuQJEv.js";import"./Button-4h-pZrvY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8HeaTLIH.js";import"./RSPContexts-BLper1Pa.js";import"./FocusScope-CdIx8Nbp.js";import"./useCollator-BEuuda2G.js";import"./VisuallyHidden-DUQ-4ejS.js";import"./Collection-B0Ce4Su5.js";import"./CollectionBuilder-DJxxsJVb.js";import"./Separator-DlHAiOK1.js";import"./SearchField-CS1y3jZ7.js";import"./useEvent-Kc6oznrN.js";import"./SelectionManager-B7qXDdFd.js";import"./Heading-U69dEP-U.js";import"./Heading-C7p3IIcE.js";import"./useManagedValue-CCYQy8ZV.js";import"./getActionGroupSlot-BxRP9D0M.js";import"./LoadingSpinner-DoTPzDls.js";import"./react-children-utilities-DEbr_-8w.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,v;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,L,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
