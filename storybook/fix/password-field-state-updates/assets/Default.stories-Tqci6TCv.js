import{r as A,j as r}from"./iframe-CIziUxb4.js";import{P as s,a as I,s as o,c as K}from"./PasswordCreationField-DDUhcvo9.js";import{L as u}from"./Label-CDKeaBWT.js";import{u as M,F as N,a as z}from"./Form-DuQp_24T.js";import{s as U}from"./Action-D9fRtCz0.js";import{B as l}from"./Button-Bo5QyJiI.js";import{m as Y}from"./IconWarning-Bo3R4dY7.js";import{C as Z}from"./CopyButton-DbhpRptt.js";import"./PropsContextProvider-CTHa5A9a.js";import"./mergeRefs-BWd0MHpr.js";import"./index-BCb4M8Mf.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D98nnMcy.js";import"./utils-CDtaCsrA.js";import"./Text-CgaJS0Gc.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-OTUHyQEq.js";import"./useFocusRing-GixRvSCg.js";import"./useFocus-C2EjpkOi.js";import"./Input-BwarHJUi.js";import"./Hidden-FsuglVKe.js";import"./TextField-BmMhD-pd.js";import"./Form-B_FAPEGw.js";import"./useLabel-xKHqVDKV.js";import"./Label-CjcM3hPV.js";import"./useTextField-a1-urwSv.js";import"./useFormReset-TpB1RScY.js";import"./useControlledState-DVvxwSwc.js";import"./useFocusable-CTkb3k3n.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Dr7dAG6C.js";import"./FieldDescription-A2U3bIvB.js";import"./Text-BbvPR7fy.js";import"./browser-Do2MbvKV.js";import"./EmulatedBoldText-DYFJL8XT.js";import"./Tooltip-CKJ2oSfK.js";import"./OverlayArrow-Crxssx6c.js";import"./ProgressBar-Cyf_qqmn.js";import"./context-COqsJpPE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CeVTCw4Y.js";import"./ReactAriaControlledValueFix-dweYB-6u.js";import"./ContextualHelpTrigger-CjuxQRV9.js";import"./Popover-BEiJ1yaF.js";import"./DialogTriggerView-BBwhD0Uy.js";import"./context-DRI9dj_K.js";import"./useStatic-jzgjWO-I.js";import"./Dialog-DrnAiCXy.js";import"./Button-Cv6Z8Boo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBbw6zuw.js";import"./RSPContexts-C-PXoOC4.js";import"./Collection-DWx577Su.js";import"./CollectionBuilder-juJreXU3.js";import"./Separator-DwuryqiD.js";import"./SearchField-B6_Arn2l.js";import"./SelectionManager-DkqMHGWK.js";import"./useEvent-CS1uc1JE.js";import"./useCollator-Bw9Jdjt0.js";import"./FocusScope-BxmYTtWO.js";import"./VisuallyHidden-D_XOb9iP.js";import"./Heading-DwiitY1h.js";import"./Heading-r07djNMc.js";import"./getActionGroupSlot-Bm-tl-k-.js";import"./LoadingSpinner-CF4f6GZw.js";import"./react-children-utilities-CwllV40S.js";import"./onlyText-Co-n7-i8.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,$={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[K.number],maxLength:2},{ruleType:o.regex,pattern:"[A-B]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{ruleType:o.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},me={title:"Form Controls/PasswordCreationField",component:s,render:e=>{const[t,h]=A.useState("");return r.jsx(s,{value:t,onValidationResult:P("onValidationResult"),onChange:x=>{P("onChange"),h(x)},...e,children:r.jsx(u,{children:"Password"})})}},a={},i={args:{isDisabled:!0}},n={args:{isRequired:!0}},m={args:{placeholder:"helloMoto"}},p={render:e=>r.jsxs(s,{...e,children:[r.jsx(u,{children:"Password"}),r.jsx(l,{children:r.jsx(Y,{})})]})},c={render:()=>{const e=I.fromDeclaration($),t=M({defaultValues:{password:""}});return r.jsxs(N,{form:t,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0},name:"password",children:r.jsxs(s,{validationPolicy:e,children:[r.jsx(u,{children:"Password"}),r.jsx(l,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(l,{onPress:()=>t.reset(),children:"Reset"}),r.jsx(l,{type:"submit",children:"Submit"})]})}},d={render:e=>{const[t,h]=A.useState("");return r.jsxs(s,{onChange:x=>h(x),...e,children:[r.jsx(u,{children:"Password"}),r.jsx(Z,{text:t})]})}};var w,y,g;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var C,b,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var F,j,B;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(B=(j=n.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,T,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(W=(T=p.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,q,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true
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
}`,...(O=(q=c.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var v,V,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const pe=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{a as Default,i as Disabled,n as Required,d as WithCopyButton,p as WithCustomButtons,c as WithForm,m as WithPlaceholder,pe as __namedExportsOrder,me as default};
