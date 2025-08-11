import{r as M,j as r}from"./iframe-Cvd7_oGo.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-fWezsGrB.js";import{L as h}from"./Label-DZmXl-gv.js";import{u as N,F as z,a as U}from"./Form-Bw5yIT9r.js";import{s as Y}from"./Action-BDVxDuzM.js";import{B as u}from"./Button-sQLGDwHF.js";import{m as Z}from"./IconWarning-x_Sg-cyk.js";import{C as G}from"./CopyButton-BRUKgQrJ.js";import"./PropsContextProvider-CjZ8S_R8.js";import"./mergeRefs-CjEz_01H.js";import"./index-DRhNAo74.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BOfQUrOF.js";import"./utils-DLoLmG8U.js";import"./Text-K3zhr9uI.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Dp7absvN.js";import"./Hidden-DIqvoFI_.js";import"./useFocusRing-BORhh_J0.js";import"./useFocus-mBCJQH3P.js";import"./TextField-DNfwYwAs.js";import"./Form-dIwvv5i0.js";import"./useLabel-C20I_MYv.js";import"./Label-CEN2LQcE.js";import"./useTextField-DuBMDIMm.js";import"./useFormReset-TshWv7lU.js";import"./useControlledState-BRJHAPjA.js";import"./useFocusable-ow-zpXhZ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Cucl0v59.js";import"./FieldDescription-DUZO2Lmv.js";import"./Text-hU5scIVG.js";import"./browser-Dthgcr78.js";import"./EmulatedBoldText-DDsUBT92.js";import"./Tooltip-CSWudQNY.js";import"./OverlayArrow-CZl6Sdtq.js";import"./ProgressBar-Cckw_t5H.js";import"./context-CPCW_rIy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BeSMCKuR.js";import"./ReactAriaControlledValueFix-UTF_PUFd.js";import"./ContextualHelpTrigger-BSCAT7-j.js";import"./Popover-B4_hLkvX.js";import"./DialogTriggerView-BfIhiSrv.js";import"./context-BKPp0JFq.js";import"./useStatic-JoVb8Rwt.js";import"./Dialog-B6nmokeD.js";import"./Button-DH0dq0mD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-dFXSg5ro.js";import"./RSPContexts-BNHCum3R.js";import"./Collection-BUlFfF8c.js";import"./CollectionBuilder-odsoNS1P.js";import"./Separator-UXxAVoEs.js";import"./SearchField-DmWHOfIU.js";import"./useEvent-CHUYW4wm.js";import"./SelectionManager-C8UQ25IV.js";import"./useCollator-Z2E5mfuy.js";import"./FocusScope-_f1yOmDv.js";import"./VisuallyHidden-ZBger3GJ.js";import"./Heading-B-L-D_0d.js";import"./Heading-CH9Zg8Ky.js";import"./getActionGroupSlot-Bjasv4sz.js";import"./LoadingSpinner-CO56yyEM.js";import"./react-children-utilities-D5vYITgE.js";import"./onlyText-Z1TJIvhB.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
