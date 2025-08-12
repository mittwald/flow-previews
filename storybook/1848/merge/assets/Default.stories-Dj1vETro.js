import{r as M,j as r}from"./iframe-DiTvlIx0.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-D68rB1RC.js";import{L as h}from"./Label-M3UKHXXD.js";import{u as N,F as z,a as U}from"./Form-8ae7zdn_.js";import{s as Y}from"./Action-Vim0FXk8.js";import{B as u}from"./Button-BiD6Lawu.js";import{m as Z}from"./IconWarning-G89JjWcD.js";import{C as G}from"./CopyButton-DYM6IHUg.js";import"./PropsContextProvider-CFcpYPaZ.js";import"./mergeRefs-B_ak7i-H.js";import"./index-BnnHP1pm.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DCG_xqAH.js";import"./utils-BABRtEIC.js";import"./Text-Rz2GzXDH.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CCQCMpIY.js";import"./Hidden-Bpwwde4M.js";import"./useFocusRing-B2-Vw04x.js";import"./useFocus-Csuog0QY.js";import"./TextField-vFmkS8-q.js";import"./Form-BkiUDrTE.js";import"./useLabel-du6TudaG.js";import"./Label-DVhhRECd.js";import"./useTextField-Bj0Agq48.js";import"./useFormReset-DnAkrJEx.js";import"./useControlledState-Cw5WssZN.js";import"./useFocusable-BMX7QfiV.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DWkDGB3S.js";import"./FieldDescription-Fi8LTOfM.js";import"./Text-DI1PKUAj.js";import"./browser-BaahsGvK.js";import"./EmulatedBoldText-drbL--yb.js";import"./Tooltip-1i7ioR9X.js";import"./OverlayArrow-CXEJUrV_.js";import"./ProgressBar-B0Vgjwix.js";import"./context-DGhDP4Fo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-S2PSgqtc.js";import"./ReactAriaControlledValueFix-DruCn9KL.js";import"./ContextualHelpTrigger-CExSg95m.js";import"./Popover-DIx8skPH.js";import"./DialogTriggerView-CU_t9XAT.js";import"./context-DkfqWRD_.js";import"./useStatic-DdGraPJb.js";import"./Dialog-ByglpE6R.js";import"./Button-B0hpxsDM.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-gIhSeEMK.js";import"./RSPContexts-RnDkEBIV.js";import"./Collection-DCDGv6Hn.js";import"./CollectionBuilder-Dz71Bmkn.js";import"./Separator-CUbm99qE.js";import"./SearchField-ch9pUxlM.js";import"./useEvent-CKujStdr.js";import"./SelectionManager-DKKfhyH7.js";import"./useCollator-CLHz9ghx.js";import"./FocusScope-DA66A_td.js";import"./VisuallyHidden-DqT0mP1T.js";import"./Heading-CtVxJMPB.js";import"./Heading-DY0O2Qkl.js";import"./getActionGroupSlot-DsxZE0Zq.js";import"./LoadingSpinner-DaBaZ8Mn.js";import"./react-children-utilities-C9HsHS3d.js";import"./onlyText-BKnmzkrb.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
