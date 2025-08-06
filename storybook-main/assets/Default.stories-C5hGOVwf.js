import{r as M,j as r}from"./iframe-BrFbgMdZ.js";import{d as I,e as U,P as a,U as k,n as s,r as A}from"./PasswordCreationField-B3_W0U0g.js";import{L as h}from"./Label-BdYHzXib.js";import{u as K,F as N,a as z}from"./Form-BGZhiE7p.js";import{s as Y}from"./Action-ZQeDjVvM.js";import{B as u}from"./Button-DrqjXTlc.js";import{m as Z}from"./IconWarning-aBCbZP3e.js";import{C as G}from"./CopyButton-DHjW3FNn.js";import"./PropsContextProvider-DlKSdUnj.js";import"./mergeRefs-CglpECzs.js";import"./index-CsZHFADM.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DSdi5gGz.js";import"./utils-uGt6lEHy.js";import"./Text-B3veiim8.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BgvCwvxg.js";import"./Hidden-UstvKMMQ.js";import"./useFocusRing-Dpc6yEcL.js";import"./useFocus-D9Wd5vZ-.js";import"./TextField-Cv2sUUZR.js";import"./Form-DphLKB0O.js";import"./useLabel-BY-hcXqn.js";import"./Label-Dtl4zIvG.js";import"./useTextField-Hu8b04JP.js";import"./useFormReset-UpbI-Wf0.js";import"./useControlledState-n0b34ryi.js";import"./useFocusable-BzJo03Xl.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BCnk_DY_.js";import"./FieldDescription-CNEYNLxI.js";import"./Text-C3YpUANr.js";import"./browser-BeJxvhux.js";import"./EmulatedBoldText-CmWQu6L0.js";import"./Tooltip-BYw6PJee.js";import"./OverlayArrow-BK6QcEmE.js";import"./ProgressBar-CACYrIaY.js";import"./context-B0-ElNi2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BeYnnAMh.js";import"./ReactAriaControlledValueFix-tEBO8Uew.js";import"./ContextualHelpTrigger-CH9wF4p-.js";import"./Popover-CkzfQVH3.js";import"./DialogTriggerView-1Z-HkVsl.js";import"./context-CFd8jkW8.js";import"./useStatic-BFH-Nkbb.js";import"./Dialog-CO5NQ1rj.js";import"./Button-dFM767hW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-IpqNhXgC.js";import"./RSPContexts-Dtf8PKxD.js";import"./Collection-Djxaz1Ld.js";import"./CollectionBuilder-DxJUJjXq.js";import"./Separator-wEFTp470.js";import"./SearchField-BfR4RjBt.js";import"./useEvent-8VQ1yeDi.js";import"./SelectionManager-BC1RK9KO.js";import"./useCollator-BKa_st1y.js";import"./FocusScope-ksb906db.js";import"./VisuallyHidden-BzneT5H9.js";import"./Heading-PSfhCvE2.js";import"./Heading-Dffh2t79.js";import"./getActionGroupSlot-B9Qutl-P.js";import"./LoadingSpinner-3OtgiQa9.js";import"./react-children-utilities-BXlg5RD0.js";import"./onlyText-lw8j_qmA.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return U(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[A.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=k.fromDeclaration(J),o=K({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(z,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
