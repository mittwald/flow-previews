import{r as M,j as r}from"./iframe-DaJUcpT8.js";import{d as I,e as U,P as a,U as k,n as s,r as A}from"./PasswordCreationField-DKYMAz08.js";import{L as h}from"./Label-BgQXylnn.js";import{u as K,F as N,a as z}from"./Form-45LVoLgf.js";import{s as Y}from"./Action-3tEpttEY.js";import{B as u}from"./Button-VCV9ziEp.js";import{m as Z}from"./IconWarning-Di7G1N2l.js";import{C as G}from"./CopyButton-D-lD1y_u.js";import"./PropsContextProvider-ADMZzlWa.js";import"./mergeRefs-BEqFWw_4.js";import"./index-D3N8NcCI.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CSXHy091.js";import"./utils-cm5Xkl-u.js";import"./Text-D1R_5zV7.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DcjqWYxF.js";import"./Hidden-DcO9dlXt.js";import"./useFocusRing-BGPs1fr9.js";import"./useFocus-BmgQs_EM.js";import"./TextField-Usv5aNlb.js";import"./Form-68wNlegC.js";import"./useLabel-prd9XZsG.js";import"./Label-CVkBl_Lv.js";import"./useTextField-D2U5Ytm3.js";import"./useFormReset-wR0NNvKg.js";import"./useControlledState-CRRDqDT-.js";import"./useFocusable-BAN9nHDM.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-AGeyblw8.js";import"./FieldDescription-gLTg3bBS.js";import"./Text-onzY52Lv.js";import"./browser-kRBy5Vjm.js";import"./EmulatedBoldText-Dp6a6rFz.js";import"./Tooltip-BB3zU48p.js";import"./OverlayArrow-CK2mB8Cb.js";import"./ProgressBar-Cnbrmi-n.js";import"./context-BvSX8hdd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DgJlXYZm.js";import"./ReactAriaControlledValueFix-a0l-vHrk.js";import"./ContextualHelpTrigger-CyQ2U54y.js";import"./Popover-C3BJJ-PT.js";import"./DialogTriggerView-CfzLhP0J.js";import"./context-nDH_4RW_.js";import"./useStatic-llywhH4U.js";import"./Dialog-D9LWMemg.js";import"./Button-BRzam8Ar.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEpf8EyH.js";import"./RSPContexts-hBgp-JuF.js";import"./Collection-Wdd3SW29.js";import"./CollectionBuilder-Bz5wg4gw.js";import"./Separator-DuKCDsxL.js";import"./SearchField-UXIbzWx2.js";import"./useEvent-rPQ2UWvx.js";import"./SelectionManager-WCXi6IP8.js";import"./useCollator-CWhSIfWE.js";import"./FocusScope-DS_o-PRb.js";import"./VisuallyHidden-DvK-wDtX.js";import"./Heading-CvGa7ST0.js";import"./Heading-B0zWjGO2.js";import"./getActionGroupSlot-Cdl7NAJL.js";import"./LoadingSpinner-8zd3RGCO.js";import"./react-children-utilities-DUF7OhwX.js";import"./onlyText-BLODx_pr.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return U(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[A.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=k.fromDeclaration(J),o=K({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(z,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
