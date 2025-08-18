import{r as M,j as r}from"./iframe-DqL79zQf.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Cz3usl-Y.js";import{L as P}from"./Label-BLSzr0Yv.js";import{u as N,F as z,a as U}from"./Form-DhQSQckz.js";import{s as Y}from"./Action-BupBWbcG.js";import{B as h}from"./Button-QUsEiN5S.js";import{m as Z}from"./IconWarning-B2WreSxS.js";import{C as G}from"./CopyButton-Bne-NGaw.js";import"./PropsContextProvider-CyLvSquV.js";import"./mergeRefs-D6gEpmO4.js";import"./index-7IubYRC5.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DNlWKJE8.js";import"./utils-z68HW5Om.js";import"./Text-zdoGkENQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DPDytGTQ.js";import"./Hidden-BIJxogKe.js";import"./useFocusRing-CbrFyu86.js";import"./useFocus-BD5ovWzl.js";import"./TextField-2CLvDbyV.js";import"./Form-R5LTMmOa.js";import"./useLabel-BjvlKqLd.js";import"./Label-CMzThDyg.js";import"./useTextField-Cpjxci2I.js";import"./useFormReset-CsKPjgKa.js";import"./useControlledState--BvK6IW4.js";import"./useFocusable-B73WrcgM.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bx1fPtVC.js";import"./FieldDescription-BHFEL7TK.js";import"./Text-M86zJQcf.js";import"./browser-AVTBNrkm.js";import"./EmulatedBoldText-DYcpE2hW.js";import"./Tooltip-B74HbONf.js";import"./OverlayArrow-5jZt71m1.js";import"./ProgressBar-CH989tir.js";import"./context-CSgowZ2Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-0rSYolxh.js";import"./ReactAriaControlledValueFix-BCNQYcDJ.js";import"./ContextualHelpTrigger-DwlxR3OO.js";import"./Popover-BGSi_Qng.js";import"./DialogTriggerView-isVpv3Jo.js";import"./context-J1QRUcAO.js";import"./useStatic-iq1b9ojT.js";import"./Dialog-DObE5EO4.js";import"./Button-BgVR6Xai.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CO3SG6lx.js";import"./RSPContexts-9NN5zZW2.js";import"./Collection-8wT1TvCk.js";import"./CollectionBuilder-CvELNXxX.js";import"./Separator-DaCZt9C1.js";import"./SearchField-C7aME9MG.js";import"./useEvent-nuKRicCO.js";import"./SelectionManager-Jx2Za9Eq.js";import"./useCollator-DUL5JuJR.js";import"./FocusScope-DbqtD9id.js";import"./VisuallyHidden-BQckF0OS.js";import"./Heading-Pzjd5sfY.js";import"./Heading-DZ03YPH_.js";import"./getActionGroupSlot-Baj1oFA-.js";import"./LoadingSpinner-BTTfXDBN.js";import"./react-children-utilities-DiV8QjlF.js";import"./onlyText-C6rcL9j5.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
