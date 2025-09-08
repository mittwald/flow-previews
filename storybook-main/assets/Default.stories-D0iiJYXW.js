import{r as M,j as r}from"./iframe-xv1hkYrp.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BnkXIO7i.js";import{L as P}from"./Label-DC7JJJSp.js";import{u as N,F as z,a as U}from"./Form-HXOxhIxL.js";import{s as Y}from"./Action-DwAWbs1F.js";import{B as h}from"./Button-CxiqmFwG.js";import{m as Z}from"./IconWarning-0FGrLhxS.js";import{C as G}from"./CopyButton-DqoUWZgQ.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-wrM_YjD9.js";import"./utils-CpTHh5rs.js";import"./Text-B_3Y_Nze.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-B3GwFloQ.js";import"./Hidden-BDDDKiVs.js";import"./useFocusRing-CU0aNGGs.js";import"./useFocus-CfLpRQBT.js";import"./TextField-D3hWr_Bw.js";import"./Form-B-L3i4zG.js";import"./useLabel-BR4zi6f8.js";import"./Label-mG8fBsu4.js";import"./useTextField-CIdmu9LD.js";import"./useFormReset-B-Mz2laO.js";import"./useControlledState-BbRhH2Ee.js";import"./useFocusable-CwWDG3DW.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BheKx6KK.js";import"./FieldDescription-BGM9sp4N.js";import"./Text-DbY3Cuep.js";import"./browser-lwEiR5fW.js";import"./EmulatedBoldText-CmD3aEdd.js";import"./Tooltip-FRifWQvM.js";import"./OverlayArrow-CUApfZDY.js";import"./ProgressBar-DjfrTOAa.js";import"./context-D4r7bTNU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./ReactAriaControlledValueFix-CrTiyXoc.js";import"./ContextualHelpTrigger-D2t6Y2RZ.js";import"./Popover-CkIiCyP4.js";import"./DialogTriggerView-a7wYn1Yu.js";import"./context-DBtsHmqs.js";import"./useStatic-Cda7hAFV.js";import"./Dialog-Xvd99Udq.js";import"./Button-BusXuZI0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-o1s-vRpH.js";import"./RSPContexts-DH2vWQTy.js";import"./Collection-DSqVCN8E.js";import"./CollectionBuilder-Dvvc79MD.js";import"./Separator-qRXs74hc.js";import"./SearchField-BwU0-hd2.js";import"./useEvent-CaWXSKpr.js";import"./SelectionManager-DH9lj--q.js";import"./useCollator-IG_dykuZ.js";import"./FocusScope-BxH26lbn.js";import"./VisuallyHidden-CfqgoXLS.js";import"./Heading-BBAjkchM.js";import"./Heading-uqNmfPuD.js";import"./getActionGroupSlot-hBdF3hkn.js";import"./LoadingSpinner-DFWWTIAT.js";import"./react-children-utilities-BZDUY5_b.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
