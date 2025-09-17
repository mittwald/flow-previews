import{r as M,j as r}from"./iframe-Mcl-fp9_.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-V2H7abXw.js";import{L as P}from"./Label-DVdBQme9.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-j5Ncw3Ab.js";import{s as Y}from"./Action-C_mGnw8t.js";import{B as h}from"./Button-DAKl4AvN.js";import{m as Z}from"./IconWarning-Lyb53OnO.js";import{C as G}from"./CopyButton-B2Pk23BD.js";import"./PropsContextProvider-D0Qkc9VN.js";import"./mergeRefs-C2rjSGvQ.js";import"./index-LMMmju_F.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BKKPCq9e.js";import"./utils-n1fDyKZ3.js";import"./Text-DoGyCRc9.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-IKUML2BV.js";import"./Hidden-0mHYsG9Y.js";import"./useFocusRing-Dg3YPgxl.js";import"./useFocus-SsmNYjih.js";import"./TextField-Cz-aJsxu.js";import"./Form-W-5ctzVT.js";import"./useLabel-DPxX2fH3.js";import"./Label-FMQv6veW.js";import"./useTextField-DMad38Mh.js";import"./useFormReset-2GD2k0-b.js";import"./useControlledState-ECxCAN2t.js";import"./useFocusable-CVnYh69T.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B7M3u5Ws.js";import"./FieldDescription-Cab0JVGg.js";import"./Text-DEIveL77.js";import"./browser-BsWVSY18.js";import"./EmulatedBoldText-yaK_s2Yh.js";import"./Tooltip-Byz8uL7h.js";import"./OverlayArrow-BjKZColU.js";import"./ProgressBar-B-0Imi_2.js";import"./context-BorfhQA_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-T_IfcqNQ.js";import"./ReactAriaControlledValueFix-DmFfptDJ.js";import"./ContextualHelpTrigger-Cd7GsZP1.js";import"./Popover-BWEYPO_l.js";import"./DialogTriggerView-4ZuKOHwK.js";import"./context-UATQnsvR.js";import"./useStatic-DehluLPa.js";import"./Dialog-Dbuy5IKg.js";import"./Button-B-ha5P18.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CSmiIi-0.js";import"./RSPContexts-D5Q6Wlej.js";import"./Collection-JtFNZJGn.js";import"./CollectionBuilder-B60nQQtd.js";import"./Separator-BOJM7lM-.js";import"./SearchField-CkC64XB4.js";import"./useEvent-C1BmSmac.js";import"./SelectionManager-BByY8zyt.js";import"./useCollator-BtrL4jRN.js";import"./FocusScope-D7ZuSfg7.js";import"./VisuallyHidden-CZ8WB-4E.js";import"./Heading-D8xlpH_x.js";import"./Heading-D7y61Lsk.js";import"./useManagedValue-eGKcA8x5.js";import"./getActionGroupSlot-DpUkVKXY.js";import"./LoadingSpinner-COEYl7Pk.js";import"./react-children-utilities-BsQQUMGS.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,de as __namedExportsOrder,ce as default};
