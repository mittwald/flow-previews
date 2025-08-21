import{r as M,j as r}from"./iframe-BvdD6qXg.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-piw1h5De.js";import{L as P}from"./Label-BnuyVShl.js";import{u as N,F as z,a as U}from"./Form-0-PEKG-0.js";import{s as Y}from"./Action-GPgeTEUr.js";import{B as h}from"./Button-7ivsFGmn.js";import{m as Z}from"./IconWarning-BNkxb_83.js";import{C as G}from"./CopyButton-COKwBBJF.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BhEhBaOS.js";import"./utils-DLyEFlgv.js";import"./Text-D84jcunx.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CrFlWLH5.js";import"./Hidden-DJ1F2YbP.js";import"./useFocusRing-CImSweUq.js";import"./useFocus-ByAGBV0g.js";import"./TextField-DFc82d9L.js";import"./Form-BShbB3hD.js";import"./useLabel-qrx4I7MD.js";import"./Label-BA_GTzaI.js";import"./useTextField-8lhmPbxJ.js";import"./useFormReset-yMYSmHMi.js";import"./useControlledState-9GcYGGux.js";import"./useFocusable-0-dkSgyo.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BU8vkL3I.js";import"./FieldDescription-Bun17LEn.js";import"./Text-CCdgZxrm.js";import"./browser-D0kBFYzL.js";import"./EmulatedBoldText-DlBeGY0R.js";import"./Tooltip-B6ycJWj5.js";import"./OverlayArrow-DnRhWojv.js";import"./ProgressBar-Bt3oFLCo.js";import"./context-CM85t4Ux.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./ReactAriaControlledValueFix-CeIeXfUd.js";import"./ContextualHelpTrigger-05DcjE-S.js";import"./Popover-DcMPgkPU.js";import"./DialogTriggerView-1z2kdnQv.js";import"./context-CUfZZ1vn.js";import"./useStatic-uGULccbV.js";import"./Dialog-BGFaL9Kl.js";import"./Button-DQnvmhgF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-2QIW6EnW.js";import"./RSPContexts-Myyfynwt.js";import"./Collection-B3KJ39IP.js";import"./CollectionBuilder-CLZLxvdl.js";import"./Separator-BTA9WwIy.js";import"./SearchField-Cf5LxW_o.js";import"./useEvent-DU_k0cnD.js";import"./SelectionManager-CaW73nQO.js";import"./useCollator-DSve1vwE.js";import"./FocusScope-D2M4fWVA.js";import"./VisuallyHidden-GD1ZdHbS.js";import"./Heading-4ynE8vAD.js";import"./Heading-C-rB2L_h.js";import"./getActionGroupSlot-D52RJivz.js";import"./LoadingSpinner-BmDETFjn.js";import"./react-children-utilities-ZBVIDedq.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
