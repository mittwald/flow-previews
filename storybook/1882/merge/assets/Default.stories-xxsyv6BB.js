import{r as M,j as r}from"./iframe-B5f77The.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BzA3BG7C.js";import{L as P}from"./Label-JDxcagIb.js";import{u as N,F as z,a as U}from"./Form-BK7x_v0I.js";import{s as Y}from"./Action-DGsiT_W5.js";import{B as h}from"./Button-C6w7hggk.js";import{m as Z}from"./IconWarning-ljKjKfGj.js";import{C as G}from"./CopyButton-DbD4SV2L.js";import"./PropsContextProvider-Cx_kWuOM.js";import"./mergeRefs-Yh0OJBs6.js";import"./index-CbjhMHv1.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CmSoGLTN.js";import"./utils-DeVL3yHt.js";import"./Text-CRBsFpfB.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-cw_ccGJA.js";import"./Hidden-DpLdfkk6.js";import"./useFocusRing-Dpk-O9NQ.js";import"./useFocus-CpnAUhj6.js";import"./TextField-DLnVqMvq.js";import"./Form-COFPxk6e.js";import"./useLabel-BZo659VM.js";import"./Label-BtB0U_ml.js";import"./useTextField-DOFOnMON.js";import"./useFormReset-CoVNXXZK.js";import"./useControlledState-BsCYAcFS.js";import"./useFocusable-DVnwojtz.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BWiO3RtC.js";import"./FieldDescription-tYYsQmnT.js";import"./Text-C70_tpAy.js";import"./browser-DNIKTkzv.js";import"./EmulatedBoldText-D73guLBi.js";import"./Tooltip-DgwaVoab.js";import"./OverlayArrow-DxI9FzZ3.js";import"./ProgressBar-roFwkZNY.js";import"./context-CDDYAalq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DLcmNs79.js";import"./ReactAriaControlledValueFix-C9YRFpeE.js";import"./ContextualHelpTrigger-BrfL6LOA.js";import"./Popover-U6TIjOHH.js";import"./DialogTriggerView-CpbUus_v.js";import"./context-CKo78_m4.js";import"./useStatic-L57Eul26.js";import"./Dialog-BrLEju1s.js";import"./Button-BJ8WzA2D.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C1oGQ4tq.js";import"./RSPContexts-B32A1VhO.js";import"./Collection-Dq30mKZW.js";import"./CollectionBuilder-IT3s11YO.js";import"./Separator-CP2Hv3YB.js";import"./SearchField-C4CWzvZC.js";import"./useEvent-Bi5phJIq.js";import"./SelectionManager-CT47WU_1.js";import"./useCollator-CMx4eqOS.js";import"./FocusScope-DJcQajcM.js";import"./VisuallyHidden-BRRdMKGS.js";import"./Heading-CY5HzgY3.js";import"./Heading-CZmRCKf6.js";import"./getActionGroupSlot-BG28dPQB.js";import"./LoadingSpinner-CEnOuMOV.js";import"./react-children-utilities-BLFVrISE.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
