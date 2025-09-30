import{r as M,j as r}from"./iframe-k0i0tSJI.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-Bp_UMydF.js";import{L as P}from"./Label-qKeJblmJ.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-ulMUJonf.js";import{s as Y}from"./Action-rR3xN66w.js";import{B as h}from"./Button-oL_0-1Fa.js";import{p as Z}from"./IconWarning-Dg2SDivU.js";import{C as G}from"./CopyButton-CrCAwgcf.js";import"./index-Cun1SEai.js";import"./dynamic-BLAyWru4.js";import"./PropsContextProvider-tjPYyEf7.js";import"./mergeRefs-BRZ6RM1F.js";import"./index-C9Xz1mMc.js";import"./clsx-B-dksMZM.js";import"./FieldError-9szde7-f.js";import"./utils-BgzpsI0V.js";import"./Text-BxPl3Uwa.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DaB8Aw8e.js";import"./useFocusRing-CO9MadZb.js";import"./useFocus-rEgPF8zF.js";import"./Input-DArPZQ3a.js";import"./Hidden-B4FAVo4g.js";import"./TextField-B9iRNtfV.js";import"./context-CLpMNAUD.js";import"./Form-Dqp5q8Rw.js";import"./useLabel-r92EfUV9.js";import"./Label-CrL1n18B.js";import"./useTextField-BhPReeNg.js";import"./useFormReset-DpoZWz7L.js";import"./useControlledState-ydeueESl.js";import"./useFocusable-B3ABF-8R.js";import"./useFormValidation-CoaqJdcD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DmBkReI5.js";import"./FieldDescription-95JlyvjO.js";import"./Text-Cgxvqary.js";import"./browser-4UXY86st.js";import"./EmulatedBoldText-DDmG2Q6m.js";import"./Tooltip-Du-pwOCc.js";import"./ClearPropsContextView-Br7mo-KY.js";import"./ProgressBar-BxBVznBa.js";import"./context-C6mYXPQf.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D4FOu5sH.js";import"./ReactAriaControlledValueFix-DdfAVWxh.js";import"./ContextualHelpTrigger-DkHJ3YMM.js";import"./Popover-CS1cgM-c.js";import"./DialogTriggerView-B91ZJb8_.js";import"./context-Cc3HDEYK.js";import"./useStatic-6jrFBcb4.js";import"./Button-S7ehKHFA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BmNwYdlA.js";import"./RSPContexts-DMQIQMHx.js";import"./FocusScope-CCUvRh1k.js";import"./useCollator-CWffamPy.js";import"./VisuallyHidden-DWX3G_l5.js";import"./Collection-BePmPaDd.js";import"./CollectionBuilder-8mCwZtNW.js";import"./Separator-BiKptde_.js";import"./SelectionManager-BsMwmSFL.js";import"./useEvent-BKfze8FD.js";import"./Heading-CnN6g1-i.js";import"./Heading-CjvbCWNJ.js";import"./useManagedValue-D8MRF5vn.js";import"./getActionGroupSlot-CCMGQIVd.js";import"./LoadingSpinner-DmRdTw1-.js";import"./react-children-utilities-Bw4-gwkX.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Po=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,Po as __namedExportsOrder,ho as default};
