import{r as M,j as r}from"./iframe-D5sJq8Pp.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-D2HBXeGw.js";import{L as h}from"./Label-C9pkE3_l.js";import{u as N,F as z,a as U}from"./Form-D5WniLeE.js";import{s as Y}from"./Action-DMCbC-Mq.js";import{B as u}from"./Button-6TUR0Zrk.js";import{m as Z}from"./IconWarning-DOhF27zV.js";import{C as G}from"./CopyButton-B8fxb0TB.js";import"./PropsContextProvider-Bv9cfvHt.js";import"./mergeRefs-9yWIebUE.js";import"./index-Cm1M_r0i.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DPBRE9in.js";import"./utils-9AX_qn18.js";import"./Text-DkuK7F_5.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DaTscDKv.js";import"./Hidden-DQQQbJzb.js";import"./useFocusRing-DOEM_U6y.js";import"./useFocus-RhB9nR94.js";import"./TextField-Ce9H6aw_.js";import"./Form-B6p3srko.js";import"./useLabel-Ch8Q4uqY.js";import"./Label-CqbD1Z1V.js";import"./useTextField-BQF8DS2o.js";import"./useFormReset-BYD-PEh4.js";import"./useControlledState-BiqnvFAK.js";import"./useFocusable-DeL6Y164.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-C_BRxZGF.js";import"./FieldDescription-C5ZBHu1g.js";import"./Text-DSs6zbpd.js";import"./browser-Um_OLCfa.js";import"./EmulatedBoldText-DJswokg6.js";import"./Tooltip-QEGtqfN2.js";import"./OverlayArrow-DbUVmUBM.js";import"./ProgressBar-B1EDvacE.js";import"./context-C2iapZe2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BQN07ymD.js";import"./ReactAriaControlledValueFix-2d0sGep5.js";import"./ContextualHelpTrigger-QgoJF9Jk.js";import"./Popover-BrRw5WAn.js";import"./DialogTriggerView-BkTJ82k3.js";import"./context-Bqz1H1Fh.js";import"./useStatic-C2JikVB-.js";import"./Dialog-D26-Wb54.js";import"./Button-B2KXtDin.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DXXMSHM3.js";import"./RSPContexts-DjLkZjo9.js";import"./Collection-CrQdosmw.js";import"./CollectionBuilder-BhFH6yJo.js";import"./Separator-BLR5bueI.js";import"./SearchField-D8zXD-s8.js";import"./useEvent-Nf0LSw3x.js";import"./SelectionManager-B8zwja7I.js";import"./useCollator-i6ItQplZ.js";import"./FocusScope-Rm6rMrw2.js";import"./VisuallyHidden-BeWBbeMu.js";import"./Heading-D3Bf2r0X.js";import"./Heading-Clo5dAHJ.js";import"./getActionGroupSlot-DeknL7IW.js";import"./LoadingSpinner-ai3Tl6wI.js";import"./react-children-utilities-D_c57uvX.js";import"./onlyText-yX3EqvvH.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
