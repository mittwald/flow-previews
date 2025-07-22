import{r as E,j as r}from"./iframe-CTS_vBBR.js";import{d as A,e as I,P as a,a as K,s,c as M}from"./PasswordCreationField-D2rK8iri.js";import{L as h}from"./Label-CTpKXefw.js";import{u as N,F as z,a as U}from"./Form-BhnDceOw.js";import{s as Y}from"./Action--huDMFDn.js";import{B as u}from"./Button-BCm6-QqX.js";import{m as Z}from"./IconWarning-fu5B3ESI.js";import{C as $}from"./CopyButton-2KhZ50x_.js";import"./PropsContextProvider-D42A7vMX.js";import"./mergeRefs-BwV9Bpf-.js";import"./index-CHVZ0_DR.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BrC_mw1K.js";import"./utils-jZBUW_kd.js";import"./Text-obNOHtVo.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-DV2ZKREv.js";import"./useFocusRing-BBi2D29q.js";import"./useFocus-TOgYA3QQ.js";import"./Input-DWYalt4t.js";import"./Hidden-BZmRwcL-.js";import"./TextField-Dg76NbVN.js";import"./Form-CUREqm_L.js";import"./useLabel-ByTznw_u.js";import"./Label-Bn0NFPwe.js";import"./useTextField-B5AiFiGq.js";import"./useFormReset-CIT6qu5J.js";import"./useControlledState-Bfc6Wiov.js";import"./useFocusable-CKYlOhg9.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B7bjxi-T.js";import"./FieldDescription-dv_Z4MiL.js";import"./Text-BLj2iCUU.js";import"./browser-CAp200rL.js";import"./EmulatedBoldText-1BeNjxGF.js";import"./Tooltip-uQSeNvY1.js";import"./OverlayArrow-DHDCgEG9.js";import"./ProgressBar-DhYw7mhF.js";import"./context-bQBwJTVW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-PMR3uOGp.js";import"./ReactAriaControlledValueFix-mH1PGZwl.js";import"./context-Qd68n4pj.js";import"./useStatic-DjQWr1Kz.js";import"./ContextualHelpTrigger-DUHBwwWk.js";import"./Popover-B_yIqzsZ.js";import"./DialogTriggerView-CNjC6RdQ.js";import"./Dialog-Dh-wheuD.js";import"./Button-Ckv0OeVG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Wiw2pSFm.js";import"./RSPContexts-Crw6uEAA.js";import"./Collection-D8tFv91v.js";import"./CollectionBuilder-C2lc3lzM.js";import"./Separator-Cm_kwdR6.js";import"./SearchField-Bligs5CS.js";import"./SelectionManager-D97bCv4u.js";import"./useEvent-B-FqLBei.js";import"./useCollator-SPBrq1bE.js";import"./FocusScope-B79Zy1Lp.js";import"./VisuallyHidden-C7PlrqLT.js";import"./Heading-0WcYtxfM.js";import"./Heading-DiZnqYS1.js";import"./getActionGroupSlot-CnqxasHi.js";import"./LoadingSpinner-B_uSEYnz.js";import"./react-children-utilities-vuzPlafR.js";import"./onlyText-CLs9Id6A.js";const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return I(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[M.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},ce={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},c={render:()=>{const e=K.fromDeclaration(H),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async()=>await Y(2e3),children:[r.jsx(U,{rules:{required:!0,validate:k(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},l={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx($,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,C,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
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
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,l as WithCopyButton,d as WithCustomButtons,c as WithForm,p as WithPlaceholder,le as __namedExportsOrder,ce as default};
