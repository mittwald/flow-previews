import{r as M,j as r}from"./iframe-DE_VUmzH.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DPBAgph-.js";import{L as P}from"./Label-C_7a3H9g.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-B3NWL6IN.js";import{s as Y}from"./Action-D0USOjD9.js";import{B as h}from"./Button-DbOovzUR.js";import{l as Z}from"./IconWarning-Lvj7TBfh.js";import{C as G}from"./CopyButton-C8cwRs1G.js";import"./index-Cun1SEai.js";import"./dynamic-LCnuwqI9.js";import"./flowComponent-VgVMv0eN.js";import"./index-DsYeEkNB.js";import"./clsx-B-dksMZM.js";import"./index-C0xI9_WX.js";import"./FieldError-CsnZ7kCy.js";import"./utils-D3dUv10b.js";import"./Text-BVPFWEoO.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CvoE6evJ.js";import"./useFocusRing-Cc9ULfoH.js";import"./useFocus-DNFgJiAK.js";import"./Input-x4gbvJ5z.js";import"./Hidden-NzD2YlQI.js";import"./TextField-g5KEI_sp.js";import"./context-COqjh3TT.js";import"./Form-BGVwlTzA.js";import"./useLabel-C4uXeX2F.js";import"./Label-C28iUhCz.js";import"./useTextField-BSYft9Rt.js";import"./useFormReset-C704hud4.js";import"./useControlledState-Bb_Q1JoV.js";import"./useFocusable-DpHFaro7.js";import"./useFormValidation-BsrhrDQJ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-C4vr9PyS.js";import"./FieldDescription-BQJEweKA.js";import"./Text-CuCsgm5W.js";import"./browser-BDXGgXpt.js";import"./EmulatedBoldText-RoWFJZi8.js";import"./Tooltip-4r1QaOte.js";import"./ClearPropsContextView-BQR3XZFs.js";import"./OverlayArrow-DyFt8UKI.js";import"./ProgressBar-Byi_x-zn.js";import"./context-Ki1OMBAj.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CetpI1LZ.js";import"./ReactAriaControlledValueFix-CVBQZUE2.js";import"./ContextualHelpTrigger-BY1bdfzr.js";import"./Popover-DymngT_R.js";import"./useOverlayController-C91c4FEW.js";import"./context-CuPWpeXC.js";import"./useStatic-DLzms8z8.js";import"./OverlayContextProvider-li4-LjZP.js";import"./Dialog-BNbjTQaX.js";import"./Button-BBiOSwoI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CUyQx-Vz.js";import"./RSPContexts-C9-aSZWC.js";import"./Collection-DYVSusLB.js";import"./CollectionBuilder-OxR4IyWH.js";import"./Separator-DKoX_8iu.js";import"./SelectionManager-CXLB6fpE.js";import"./useEvent-YlDniR0o.js";import"./useCollator-BsMiccdt.js";import"./FocusScope-BTm6JbhF.js";import"./VisuallyHidden-B4hxOAM_.js";import"./OverlayTrigger-B-CgEOd1.js";import"./ControlledNotification-BeYmb5Aq.js";import"./Heading-BHZJpH19.js";import"./Heading-C4_OUEWY.js";import"./useManagedValue-udiPXIxX.js";import"./getActionGroupSlot-_T8J6cWZ.js";import"./LoadingSpinner-cO76IOgL.js";import"./react-children-utilities-Cq51VZuX.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},go={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
