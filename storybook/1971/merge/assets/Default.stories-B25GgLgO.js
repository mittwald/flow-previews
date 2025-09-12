import{r as M,j as r}from"./iframe-BsMxae-o.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BB_IpKgC.js";import{L as P}from"./Label-BYgJ_MYX.js";import{u as N,F as z,a as U}from"./Form-Di6nNt_Y.js";import{s as Y}from"./Action-Cu5585NU.js";import{B as h}from"./Button-DfdH0gMv.js";import{m as Z}from"./IconWarning-B9I94qHq.js";import{C as G}from"./CopyButton-DB7wXtOS.js";import"./PropsContextProvider-D65IVLY2.js";import"./mergeRefs-CbyFhnfd.js";import"./index-ChzAh0kZ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BMEYjrX6.js";import"./utils-BMVQSkne.js";import"./Text-B7BhLbkb.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CKe7hi61.js";import"./Hidden-BVtLBYcf.js";import"./useFocusRing-DtSDG_eK.js";import"./useFocus-HKqTfwLq.js";import"./TextField-BomFOzDr.js";import"./Form-D5ALWCUg.js";import"./useLabel-BvYe3LSr.js";import"./Label-CyhUcAwc.js";import"./useTextField-Cy3E9Ec0.js";import"./useFormReset-CGrfLprD.js";import"./useControlledState-CcMFCsVI.js";import"./useFocusable-DYhRFaOI.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bafd17gj.js";import"./FieldDescription-BnPdtoeH.js";import"./Text-B7cMlOzY.js";import"./browser-BOk4ZIfK.js";import"./EmulatedBoldText-CNMoZ52h.js";import"./Tooltip-DSibIiUx.js";import"./OverlayArrow-CRlBDhHx.js";import"./ProgressBar-D3b6UtGt.js";import"./context-DrnfoIRz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BCH9SnbZ.js";import"./ReactAriaControlledValueFix-F62Dze-M.js";import"./ContextualHelpTrigger-D0Qnok41.js";import"./Popover-IbF6moTA.js";import"./DialogTriggerView-B1KD3q3O.js";import"./context-BQl0W7wd.js";import"./useStatic-NxgnZ87E.js";import"./Dialog-otIdMc29.js";import"./Button-Cr74-zWI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DrYqgVGE.js";import"./RSPContexts-Bo0-inYM.js";import"./Collection-BsdihtfM.js";import"./CollectionBuilder--Y6752fw.js";import"./Separator-BgSjOnqA.js";import"./SearchField-C1j-ZqX1.js";import"./useEvent-CzxiRkfF.js";import"./SelectionManager-DPIdiC1p.js";import"./useCollator-BG1bVIzj.js";import"./FocusScope-CZ17A4u_.js";import"./VisuallyHidden-D9PR17i6.js";import"./Heading-YHeaSeUe.js";import"./Heading-CvCiAr4K.js";import"./getActionGroupSlot-DrUE4wXM.js";import"./LoadingSpinner-B-hN89-2.js";import"./react-children-utilities-J2SLQa0z.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
