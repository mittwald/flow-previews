import{r as M,j as r}from"./iframe-BEnK-FWT.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DgaVQN5M.js";import{L as P}from"./Label-jTnCUURY.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-OB_na3YK.js";import{s as Y}from"./Action-Dje9lihP.js";import{B as h}from"./Button-Du_IXIsC.js";import{l as Z}from"./IconWarning-Du8jrWof.js";import{C as G}from"./CopyButton-DWPWwyw1.js";import"./index-Cun1SEai.js";import"./dynamic-DjJiwxiO.js";import"./flowComponent-DvB_ZVBE.js";import"./index-BPBs0lX7.js";import"./clsx-B-dksMZM.js";import"./index-DmntYai2.js";import"./FieldError-BHfIYnvw.js";import"./utils-HuzRHECM.js";import"./Text-pg5s_iHF.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CMYFByMY.js";import"./useFocusRing-Bx80huIr.js";import"./useFocus-DNN1vAkK.js";import"./Input-D7T6tVMZ.js";import"./Hidden-B8h_3GWf.js";import"./TextField-BoBwO4B-.js";import"./context-C5-mMKGT.js";import"./Form-B4lJ4F2B.js";import"./useLabel-DH4gBFQn.js";import"./Label-DpqaIvZR.js";import"./useTextField-GOqjTl_D.js";import"./useFormReset-UhEuFSE1.js";import"./useControlledState-M8qHyrFf.js";import"./useFocusable-B7vzQveK.js";import"./useFormValidation-CaI2qlPb.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BuJc9GYO.js";import"./FieldDescription-CxSMNnGp.js";import"./Text-DfapAs8s.js";import"./browser-CXszXSov.js";import"./EmulatedBoldText-DzLnbGXm.js";import"./Tooltip-DIk1ugDQ.js";import"./ClearPropsContextView-F9DsjkX8.js";import"./OverlayArrow-CtuVQXhz.js";import"./ProgressBar-VOq4RT67.js";import"./context-B1E8CUSR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DxstFItm.js";import"./ReactAriaControlledValueFix-C1kT0Js9.js";import"./ContextualHelpTrigger-7b7KdHOi.js";import"./Popover-DZl8NY7u.js";import"./useOverlayController-BE8aQLWH.js";import"./context-BV6G6ZUO.js";import"./useStatic-B4Kccozc.js";import"./OverlayContextProvider-j0JmEzC4.js";import"./Dialog-CDa_BhSJ.js";import"./Button-CDOmUSXw.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BT-0Cvdy.js";import"./RSPContexts-BUhaye_C.js";import"./Collection-BOkVQ-64.js";import"./CollectionBuilder-BHVjkzb6.js";import"./Separator-Cp8WNBkf.js";import"./SelectionManager-C9W_dvum.js";import"./useEvent-CuOy2IQf.js";import"./useCollator-B8pGQ6dk.js";import"./FocusScope-CIlgtdEP.js";import"./VisuallyHidden-uM_MQnLf.js";import"./OverlayTrigger-E-7GhxTF.js";import"./ControlledNotification-CbbsaCZP.js";import"./Heading-CM2cHxtn.js";import"./Heading-BLcTsrbo.js";import"./useManagedValue-C1t3efRM.js";import"./getActionGroupSlot-W7A_YSpc.js";import"./LoadingSpinner-BRr-XCzk.js";import"./react-children-utilities-DgtJwUVJ.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},go={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const bo=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,bo as __namedExportsOrder,go as default};
