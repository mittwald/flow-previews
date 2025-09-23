import{r as M,j as r}from"./iframe-BJWngGl7.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-CsafYLSD.js";import{L as P}from"./Label-DuDbuPqK.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DDo3nbid.js";import{s as Y}from"./Action-1l9_L_W5.js";import{B as h}from"./Button-Dpovk5Ay.js";import{q as Z}from"./IconWarning-CLxGQCa2.js";import{C as G}from"./CopyButton-Da_e0Q88.js";import"./dynamic-D7o2EbQn.js";import"./PropsContextProvider-DxSnxty7.js";import"./mergeRefs-CeYupt5U.js";import"./index-CMnnMEF7.js";import"./clsx-B-dksMZM.js";import"./FieldError-RjUORd-P.js";import"./utils-BjLoxrER.js";import"./Text-zfbbvU9b.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BEwONPHD.js";import"./Hidden-cZZZgSgN.js";import"./useFocusRing-B_Jq-YSB.js";import"./useFocus-B52D3fzv.js";import"./TextField-BtON624e.js";import"./Form-DRROzcFd.js";import"./useLabel-Lh8Q6d1O.js";import"./Label-jDh2Rcdd.js";import"./useTextField-DQq52j-y.js";import"./useFormReset-BCaIB7JH.js";import"./useControlledState-DIKMvFKO.js";import"./useFocusable-jxsYQPZM.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BQmnq4AI.js";import"./FieldDescription-CU15SeiK.js";import"./Text-D-lw11hw.js";import"./browser-qhbVwDYR.js";import"./EmulatedBoldText-BDv3rega.js";import"./Tooltip-ECn4vtaU.js";import"./ClearPropsContextView-DxmEoSzP.js";import"./ProgressBar-IjP_LWAf.js";import"./context-ZX7huqtR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DP6nHzmP.js";import"./ReactAriaControlledValueFix-Dql89lWY.js";import"./ContextualHelpTrigger-BmbnC5yy.js";import"./Popover-DBKfYnMB.js";import"./DialogTriggerView-G0XTVNWS.js";import"./context-D9sg3hhH.js";import"./useStatic-BpRokF7z.js";import"./Button-BC63ENzq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bx1Ga4ml.js";import"./RSPContexts-1ZAuRZHz.js";import"./FocusScope-DwCuMKHy.js";import"./useCollator-Qs-Te_M3.js";import"./VisuallyHidden-5aVnsY39.js";import"./Collection-CxJ7q3qS.js";import"./CollectionBuilder-CsBKfuQ1.js";import"./Separator-DE1lcCbm.js";import"./SearchField-Cm99TGpl.js";import"./useEvent-Bn8fTfAG.js";import"./SelectionManager-DgshuB3D.js";import"./Heading-ByO-2qwf.js";import"./Heading-Cup4Z6Fz.js";import"./useManagedValue-cC2NXg81.js";import"./getActionGroupSlot-BcQW_u77.js";import"./LoadingSpinner-D0Y9UFL7.js";import"./react-children-utilities-DhRUyYx3.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
