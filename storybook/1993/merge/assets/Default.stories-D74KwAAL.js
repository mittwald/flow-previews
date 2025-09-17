import{r as M,j as r}from"./iframe-DKbVX-Q4.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BZR9Ghsq.js";import{L as P}from"./Label-Dr8K8otC.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-bV_0g262.js";import{s as Y}from"./Action-DMnUknIz.js";import{B as h}from"./Button-DHaahZXz.js";import{m as Z}from"./IconWarning-CwOfNeg5.js";import{C as G}from"./CopyButton-Cqdtzc0C.js";import"./PropsContextProvider-jeOa0ZES.js";import"./mergeRefs-Q550Qguu.js";import"./index-C2KS530J.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DMz-rebE.js";import"./utils-BkpHnTsU.js";import"./Text-CUplgO8_.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-9s9egjt8.js";import"./Hidden-D4Nr3Z2s.js";import"./useFocusRing-CNTepbVZ.js";import"./useFocus-BSzVp7e_.js";import"./TextField-Bg7pk97P.js";import"./Form-DeoxQrJ0.js";import"./useLabel-xF4kjUJ4.js";import"./Label-zFNLx0tV.js";import"./useTextField-DCNHdt2S.js";import"./useFormReset-Bl7MFLhY.js";import"./useControlledState-DPI6eaeZ.js";import"./useFocusable-V5Yb86R1.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DmYZY-AH.js";import"./FieldDescription-DIcjPjOK.js";import"./Text-BScgMmTm.js";import"./browser-f0JKU1-T.js";import"./EmulatedBoldText-GMB9n-7d.js";import"./Tooltip-BiRbSViV.js";import"./OverlayArrow-DI6CzN6D.js";import"./ProgressBar-CBmHG919.js";import"./context-CEbk5IPs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CteVI3SD.js";import"./ReactAriaControlledValueFix-BRsoMo0n.js";import"./ContextualHelpTrigger-BmQRLTdZ.js";import"./Popover-DmMqlMiK.js";import"./DialogTriggerView-iXY870Z0.js";import"./context-cawJMatb.js";import"./useStatic-X0n-4EnU.js";import"./Dialog-CMjGRt0K.js";import"./Button-BxBgI48c.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-xBrGITaP.js";import"./RSPContexts-DwjCRf2W.js";import"./Collection-ztGNnLcc.js";import"./CollectionBuilder-DDbAHuMc.js";import"./Separator-B52_I9Ir.js";import"./SearchField-CYyqDTIT.js";import"./useEvent-CpKb_F4n.js";import"./SelectionManager-egJl3JHW.js";import"./useCollator-BomaeOTE.js";import"./FocusScope-Cxy8QZEw.js";import"./VisuallyHidden-DbgH8FGV.js";import"./Heading-DVMpdE5r.js";import"./Heading-5IUx1rJ9.js";import"./useManagedValue-CAyg2rgu.js";import"./getActionGroupSlot-BGUvfLPF.js";import"./LoadingSpinner-nmPm0aQJ.js";import"./react-children-utilities-Bkz_eSVg.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
