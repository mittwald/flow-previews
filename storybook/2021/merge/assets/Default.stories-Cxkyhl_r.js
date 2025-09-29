import{r as M,j as r}from"./iframe-MIRc1tgM.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-3DLMIRRP.js";import{L as P}from"./Label-6ip-YDAK.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-CnYaB6E2.js";import{s as Y}from"./Action-C4w8f-qm.js";import{B as h}from"./Button-JGTIxpZE.js";import{p as Z}from"./IconWarning-0xUxCYxJ.js";import{C as G}from"./CopyButton-DfRNRMHk.js";import"./index-Cun1SEai.js";import"./dynamic-C-bCBCeB.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./clsx-B-dksMZM.js";import"./index-Bluht812.js";import"./FieldError-CET0Lp84.js";import"./utils-Wg8-dAbi.js";import"./Text-CqfOq6kd.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CntKpz0M.js";import"./useFocusRing-BXtZEpMW.js";import"./useFocus-D5-sLX53.js";import"./Input-Dq9_JaMk.js";import"./Hidden-CQtTG736.js";import"./TextField-BI7zaVgW.js";import"./context-gIAWaTnY.js";import"./Form-DdpQvp-N.js";import"./useLabel-BYf9ahG7.js";import"./Label-BZ6fLiSQ.js";import"./useTextField-D6znRGpk.js";import"./useFormReset-BLfHAfi4.js";import"./useControlledState-hbnLpfLJ.js";import"./useFocusable-42wCCaNx.js";import"./useFormValidation-BwYj4c-E.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DXgvjoE9.js";import"./FieldDescription-B7e-UXQa.js";import"./Text-DB0aA-4n.js";import"./browser-D2aBH95U.js";import"./EmulatedBoldText-tFsrQfu_.js";import"./Tooltip-DYVJb0oU.js";import"./ClearPropsContextView-BJ9mJsVp.js";import"./ProgressBar-DSHI0B5V.js";import"./context-7dZHwnb1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./ReactAriaControlledValueFix-CDVpgvAn.js";import"./ContextualHelpTrigger-C6X5nMNv.js";import"./Popover-D6qyKu9r.js";import"./DialogTriggerView-BBSm9KQL.js";import"./context-B5ID5FgA.js";import"./useStatic-4IAJfawn.js";import"./Button-Bb1_Qr-8.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BoYI9IsN.js";import"./RSPContexts-TWbyIvJO.js";import"./FocusScope-CO7KUiC3.js";import"./useCollator-ChtnueVT.js";import"./VisuallyHidden-hT4NoAo3.js";import"./Collection-BF9KVqKC.js";import"./CollectionBuilder-gc2XqGfN.js";import"./Separator-CwF2l7Tl.js";import"./SelectionManager-Bb0sVVLv.js";import"./useEvent-C__VA96B.js";import"./ControlledNotification-DAn0r14w.js";import"./Heading-CpZU4iUX.js";import"./Heading-Doke7kKe.js";import"./useManagedValue-Ba-4bJD0.js";import"./getActionGroupSlot-DN8d2K7y.js";import"./LoadingSpinner-DiZJo45g.js";import"./react-children-utilities-C3Y2kibY.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Po={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const wo=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,wo as __namedExportsOrder,Po as default};
