import{r as M,j as r}from"./iframe-DaUAgimo.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-CA-9CRGk.js";import{L as P}from"./Label-BgV7ip1p.js";import{u as N,F as z,a as U}from"./Form-v8meviLP.js";import{s as Y}from"./Action-6Ewb0bna.js";import{B as h}from"./Button-BNJyR7fn.js";import{m as Z}from"./IconWarning-Jl_pbRrq.js";import{C as G}from"./CopyButton-D_2ZJVVr.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CBWJBmz-.js";import"./utils-Dv3HAiNW.js";import"./Text-DKL0uLiC.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D-iHY_KE.js";import"./Hidden-DmAVKgDo.js";import"./useFocusRing-6fCWhHXp.js";import"./useFocus-DfmeJaC9.js";import"./TextField-Cz-3i59y.js";import"./Form-StxO2YAG.js";import"./useLabel-4W4rDaLN.js";import"./Label-BA5dW2di.js";import"./useTextField-DwvDg_tT.js";import"./useFormReset-CA4kI8bZ.js";import"./useControlledState-HXI1EgZM.js";import"./useFocusable-91Y8y3Dw.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BvHufvs5.js";import"./FieldDescription-cWSnkLNH.js";import"./Text-DqLl2XlR.js";import"./browser-DFc9RAYz.js";import"./EmulatedBoldText-B3KIlJpF.js";import"./Tooltip-B91tuinO.js";import"./OverlayArrow-De5g7eHd.js";import"./ProgressBar-Cs4fjP5n.js";import"./context-DGmQszzG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./ReactAriaControlledValueFix-BuhEcnW8.js";import"./ContextualHelpTrigger-CjTo8U9H.js";import"./Popover-C3acxAMq.js";import"./DialogTriggerView-CgOUSRTq.js";import"./context-C_g0dLJp.js";import"./useStatic-Djoi-J49.js";import"./Dialog-CaJ4kRlO.js";import"./Button-CD_lBn7X.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BEu6_Qu_.js";import"./RSPContexts-GpjylgJ9.js";import"./Collection-Cbp4nuPj.js";import"./CollectionBuilder-Cu6aZgsw.js";import"./Separator-AEaXKmSc.js";import"./SearchField-De9Vc972.js";import"./useEvent-dvApoQWz.js";import"./SelectionManager-bQOu0uyJ.js";import"./useCollator-CI-kdhZu.js";import"./FocusScope-Gc7sAVxN.js";import"./VisuallyHidden-BnUSGmEW.js";import"./Heading-CZC9UHM5.js";import"./Heading-CBph4xMm.js";import"./getActionGroupSlot-V1QIM2yi.js";import"./LoadingSpinner-MgjzVDHH.js";import"./react-children-utilities-DtupJrsM.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
