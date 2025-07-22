import{r as E,j as r}from"./iframe-BKWcqz6w.js";import{d as A,e as I,P as a,a as K,s,c as M}from"./PasswordCreationField-j6DtYbpL.js";import{L as h}from"./Label-Cbbeq5AD.js";import{u as N,F as z,a as U}from"./Form-DH3ovo2t.js";import{s as Y}from"./Action-BG2HGkiJ.js";import{B as u}from"./Button-CDMbyENh.js";import{m as Z}from"./IconWarning-CiiLQ5Id.js";import{C as $}from"./CopyButton-RXYdc93K.js";import"./PropsContextProvider-C5Igvylm.js";import"./mergeRefs-C4ZbtdaD.js";import"./index-DJrDs1kh.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-B_JMWavC.js";import"./utils-CQeLeN4J.js";import"./Text-ChPHkoYL.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-DfxlRKcN.js";import"./useFocusRing-BgI-Wk5t.js";import"./useFocus-BlH6xcxh.js";import"./Input-BenWenGs.js";import"./Hidden-CkZKnpKj.js";import"./TextField-CHY6h4XH.js";import"./Form-DoHwQU7E.js";import"./useLabel-D1fNKuwy.js";import"./Label-D6DYt8_O.js";import"./useTextField-C8uxY6vr.js";import"./useFormReset-DXZOmU-A.js";import"./useControlledState-D-vJPGY9.js";import"./useFocusable-BSIifKXa.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DKrQw3Mj.js";import"./FieldDescription-DG8hdeYK.js";import"./Text-Fi67VBtl.js";import"./browser-DUKC-94T.js";import"./EmulatedBoldText-BJOxnJTr.js";import"./Tooltip-DjTnWd9b.js";import"./OverlayArrow-vSfQPgA4.js";import"./ProgressBar-C6vJSYrT.js";import"./context-QVFAHjz-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DH0uxzC_.js";import"./ReactAriaControlledValueFix-DU44QP0Q.js";import"./context-fbLD2I4R.js";import"./useStatic-wPZWVCFd.js";import"./ContextualHelpTrigger-okSExvSN.js";import"./Popover-Zds_k-HN.js";import"./DialogTriggerView-BQEPAYwQ.js";import"./Dialog-DhBeDFtI.js";import"./Button-VVXhfFKF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BwfaRRJR.js";import"./RSPContexts-DdS6JTeo.js";import"./Collection-C7UaXUW1.js";import"./CollectionBuilder-DDv9MTUl.js";import"./Separator-0bHFPMSf.js";import"./SearchField-BUGK_Wf7.js";import"./SelectionManager-D5GxgTFL.js";import"./useEvent-BzcH6Ltb.js";import"./useCollator-DIoPzu3e.js";import"./FocusScope-uRnVEpI_.js";import"./VisuallyHidden-DSrM5G1n.js";import"./Heading-Bzn4J5ZV.js";import"./Heading-Brw0cfIy.js";import"./getActionGroupSlot-DjN4KLUT.js";import"./LoadingSpinner-DjG0OPxh.js";import"./react-children-utilities-4KqsAyKM.js";import"./onlyText-hEnO5ocl.js";const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return I(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[M.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},p={args:{isRequired:!0}},m={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},l={render:()=>{const e=K.fromDeclaration(H),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async()=>await Y(2e3),children:[r.jsx(U,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx($,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,C,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var F,b,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=m.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation()
      }} name="password">
          <PasswordCreationField validationPolicy={policy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,p as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,m as WithPlaceholder,ce as __namedExportsOrder,le as default};
