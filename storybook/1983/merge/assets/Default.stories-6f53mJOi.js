import{r as M,j as r}from"./iframe-BJ0F67WV.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DwKwGtap.js";import{L as P}from"./Label-DdDrAhKV.js";import{u as N,F as z,a as U}from"./Form-CphuCCBx.js";import{s as Y}from"./Action-DQsKkgIU.js";import{B as h}from"./Button-CnQZL08m.js";import{m as Z}from"./IconWarning-D8lhACCL.js";import{C as G}from"./CopyButton-CmZiyQsq.js";import"./dynamic-D4EbkcOt.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./clsx-B-dksMZM.js";import"./index-C5tuckEm.js";import"./FieldError-zuZgMzEa.js";import"./utils-CfdyWDg2.js";import"./Text-DUTh34WN.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CRkQVq-1.js";import"./Hidden-iBx55YDK.js";import"./useFocusRing-CZqmVUZk.js";import"./useFocus-N8Qk0gvU.js";import"./TextField-CsP4pSiS.js";import"./Form-aW46NXWl.js";import"./useLabel-CE1zHuYM.js";import"./Label-BZcf1Nsx.js";import"./useTextField-DGpbu28C.js";import"./useFormReset-5M8XX6CH.js";import"./useControlledState-g4NJV7ij.js";import"./useFocusable-k7wU8KZy.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B5pU0GHC.js";import"./FieldDescription-COCDalyM.js";import"./Text-DvcA_djt.js";import"./browser-ENr42WFT.js";import"./EmulatedBoldText-CK3yk5uQ.js";import"./Tooltip-ByNwAnsU.js";import"./OverlayArrow--hlAjm0f.js";import"./ProgressBar-BZfTjKSF.js";import"./context-DDk-RgEI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./ReactAriaControlledValueFix-CXV4MYur.js";import"./ContextualHelpTrigger-C0Fdabga.js";import"./Popover-Dgu6lEcA.js";import"./DialogTriggerView-NFgxLp1f.js";import"./context-DqfxRtzM.js";import"./useStatic-BcjnPkg-.js";import"./Dialog-CcAHYHw-.js";import"./Button-CJVv4977.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C0-WYOlY.js";import"./RSPContexts-BTU5SObx.js";import"./Collection-B8sxr2FE.js";import"./CollectionBuilder-L5ZDKpRe.js";import"./Separator-CMNt12Nc.js";import"./SearchField-K6WJ8JUX.js";import"./useEvent-BEGbzF0p.js";import"./SelectionManager-aRuCxMGp.js";import"./useCollator-ueFTVoBb.js";import"./FocusScope-own16ieq.js";import"./VisuallyHidden-CST8zJDR.js";import"./ControlledNotification-DPl-ua4c.js";import"./Heading-B9mg5LEa.js";import"./Heading-BcZio6h0.js";import"./getActionGroupSlot-DrYIE0ib.js";import"./LoadingSpinner-s7oSeT27.js";import"./react-children-utilities-B_H1ICNu.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
