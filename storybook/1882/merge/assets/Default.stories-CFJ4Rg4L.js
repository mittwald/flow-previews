import{r as M,j as r}from"./iframe-CqOqoVaP.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-dfNXG939.js";import{L as P}from"./Label-CXX9Ul6V.js";import{u as N,F as z,a as U}from"./Form-Nmzpv4iw.js";import{s as Y}from"./Action-fJ1CcCf_.js";import{B as h}from"./Button-CLlHTQEG.js";import{m as Z}from"./IconWarning-Bl-oEACJ.js";import{C as G}from"./CopyButton-CRln0cuh.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Db8jl934.js";import"./utils-CLjii6jw.js";import"./Text-cqx9MXzt.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cl8UGCCk.js";import"./Hidden-G9XKC0s_.js";import"./useFocusRing-BUAA1D8N.js";import"./useFocus-B9OFNFcs.js";import"./TextField-DbkzlANK.js";import"./Form-DfmQoqyq.js";import"./useLabel-BbxdwBsw.js";import"./Label-DmkwH-X_.js";import"./useTextField-DA4mJlaO.js";import"./useFormReset-DvIrrZd5.js";import"./useControlledState-BdCCPWsc.js";import"./useFocusable-BW0s8v46.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-EM0a2FXb.js";import"./FieldDescription-S2KPeq-n.js";import"./Text-B3-X_MJa.js";import"./browser-5vSgihvA.js";import"./EmulatedBoldText-CUXBtHhG.js";import"./Tooltip-BTs_noE4.js";import"./OverlayArrow-Demj6cv0.js";import"./ProgressBar-C7nzlf9n.js";import"./context-V257UCTc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./ReactAriaControlledValueFix-Be-G_pY5.js";import"./ContextualHelpTrigger-CDuQIaIa.js";import"./Popover-yINnB5RN.js";import"./DialogTriggerView-DwJ6gTTr.js";import"./context-DEmZbP6Z.js";import"./useStatic-BhcqT1RN.js";import"./Dialog-C3VX0NXb.js";import"./Button-C385LXs-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-bNRByjMC.js";import"./RSPContexts-D4Iw314Z.js";import"./Collection-PuGMBXVn.js";import"./CollectionBuilder-q1IRq8KF.js";import"./Separator-5LsX3nzm.js";import"./SearchField-AywMrJlM.js";import"./useEvent-HRbQaI7K.js";import"./SelectionManager-DbaPsgiJ.js";import"./useCollator-C8Ow2U1A.js";import"./FocusScope-C_8IMyFN.js";import"./VisuallyHidden-BthzWCih.js";import"./Heading-CO3GEgfZ.js";import"./Heading-DhNp_5ef.js";import"./getActionGroupSlot-D2CKZ7h6.js";import"./LoadingSpinner-ABbum_Xg.js";import"./react-children-utilities-6aP6oPPW.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
