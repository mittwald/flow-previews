import{r as M,j as r}from"./iframe-CqRNQciv.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DEtczUip.js";import{L as P}from"./Label-B1-MUuXM.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BLVDMc4-.js";import{s as Y}from"./Action-atfzbcNo.js";import{B as h}from"./Button-BQVO0si3.js";import{m as Z}from"./IconWarning-Byt1rMjk.js";import{C as G}from"./CopyButton-CSsEDfhJ.js";import"./PropsContextProvider-BQfe9ict.js";import"./mergeRefs-ClD3ZqgW.js";import"./index-BklbjYgM.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DSIOhjbk.js";import"./utils-CDZvBAhZ.js";import"./Text-DPg2upf1.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BjCh3wTR.js";import"./Hidden-B2J6qN6V.js";import"./useFocusRing-B0f1J6LY.js";import"./useFocus-C23Lw-eJ.js";import"./TextField-Bz3Bvh6E.js";import"./Form-B_ua98af.js";import"./useLabel-B8y4VsiL.js";import"./Label-D-Urwdt3.js";import"./useTextField-mA3ppTq3.js";import"./useFormReset-1xQ2Hjo2.js";import"./useControlledState-CM_u9bSJ.js";import"./useFocusable-Bbxq5z2c.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-5_HnQqyB.js";import"./FieldDescription-BWOf38H6.js";import"./Text-BmM8CnJX.js";import"./browser-DF98vWDx.js";import"./EmulatedBoldText-Dxetj7v-.js";import"./Tooltip-BHa3vk0D.js";import"./OverlayArrow-DyqT2ErN.js";import"./ProgressBar-BcNp5lkE.js";import"./context-DEliiBST.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Ctan4lLb.js";import"./ReactAriaControlledValueFix-BnQPfuJn.js";import"./ContextualHelpTrigger-fbVbXIOa.js";import"./Popover-NzuYkbSd.js";import"./DialogTriggerView-BgdRS1kA.js";import"./context-BVMhSMnq.js";import"./useStatic-DY1i4yNR.js";import"./Dialog-D7VtK-4A.js";import"./Button-Cp6wFlJh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Qa0Hjq2B.js";import"./RSPContexts-Cux7rZ-z.js";import"./Collection-p1kezi7h.js";import"./CollectionBuilder-C5f-xul0.js";import"./Separator-DooYmmOD.js";import"./SearchField-CmWplFkj.js";import"./useEvent-QhZz2GUM.js";import"./SelectionManager-BZWRaM2c.js";import"./useCollator-DR7vJXcv.js";import"./FocusScope-1rZ1gxhZ.js";import"./VisuallyHidden-CgIcH36Q.js";import"./Heading-CQg1SG_l.js";import"./Heading-D9MkxIpz.js";import"./useManagedValue-Byoaa_vM.js";import"./getActionGroupSlot-CoRCewfO.js";import"./LoadingSpinner-B7q__8zb.js";import"./react-children-utilities-Dh7vPxtw.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
