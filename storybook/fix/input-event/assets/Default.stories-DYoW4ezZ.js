import{r as M,j as r}from"./iframe-Bl4Z707A.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-B6QawiSK.js";import{L as h}from"./Label-CPCFvVkX.js";import{u as N,F as z,a as U}from"./Form-QL7RCKvX.js";import{s as Y}from"./Action-Xhvrngkc.js";import{B as u}from"./Button-CAeJc8Z4.js";import{m as Z}from"./IconWarning-BzUaRhpv.js";import{C as G}from"./CopyButton-DMCi3BJU.js";import"./PropsContextProvider-BOV7_qOz.js";import"./mergeRefs-Cl6DsAU2.js";import"./index-Ct7SW8Jp.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-C8A_yU5e.js";import"./utils-B5rgjLnQ.js";import"./Text-DhMTI7iw.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C53hMQbG.js";import"./Hidden-CHUtH-RP.js";import"./useFocusRing-CE5kArcs.js";import"./useFocus-CBM9z24y.js";import"./TextField-BXBGjaTA.js";import"./Form-Ch0FWOcT.js";import"./useLabel-CUTayXOd.js";import"./Label-G_0fE9c9.js";import"./useTextField-B3Re73jf.js";import"./useFormReset-knu-9Cub.js";import"./useControlledState-CTldHWvB.js";import"./useFocusable-D6HN1uNY.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-QhX9CBNs.js";import"./FieldDescription-BMYWLYwx.js";import"./Text-NIRm_0Gu.js";import"./browser-CQSXz4Vb.js";import"./EmulatedBoldText-BAGT2_Bu.js";import"./Tooltip-C5LaGkFX.js";import"./OverlayArrow-BA0zDJHh.js";import"./ProgressBar-Cbl5iDEF.js";import"./context-DCYh_tbU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-65RopkTU.js";import"./ReactAriaControlledValueFix-_ARDmRvQ.js";import"./ContextualHelpTrigger-fRfWF_b8.js";import"./Popover-Be4hLP5F.js";import"./DialogTriggerView-y27VTJXE.js";import"./context-BTbq7RPj.js";import"./useStatic-CbeUAfqO.js";import"./Dialog-DBqZXEFY.js";import"./Button-H_Ok05n0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cab7A3iT.js";import"./RSPContexts-Cn8bYmaC.js";import"./Collection-Ujk4Ju59.js";import"./CollectionBuilder-OReuuDhF.js";import"./Separator-CHUHKizG.js";import"./SearchField-C3XyOz-3.js";import"./useEvent-Bs-KGgDm.js";import"./SelectionManager-BhBrKG28.js";import"./useCollator-BR3Iakvu.js";import"./FocusScope-DPadz4__.js";import"./VisuallyHidden-DoxRRjGn.js";import"./Heading-DE_gUSoO.js";import"./Heading-Chi5TgUg.js";import"./getActionGroupSlot-CiRXGJlD.js";import"./LoadingSpinner-RrbLYMgz.js";import"./react-children-utilities-gykxUahK.js";import"./onlyText-BXmp5syd.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,v,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,W,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
