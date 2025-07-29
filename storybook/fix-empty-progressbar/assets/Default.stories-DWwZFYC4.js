import{r as A,j as r}from"./iframe-D6sRUaJR.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-oKv7qkMx.js";import{L as h}from"./Label-DQJ-81B_.js";import{u as z,F as U,a as Y}from"./Form-CjKEb3B2.js";import{s as Z}from"./Action-C3Ui2vCc.js";import{B as u}from"./Button-BCWx4ySg.js";import{m as $}from"./IconWarning-D8wqW4GU.js";import{C as k}from"./CopyButton-YqH-cdMc.js";import"./PropsContextProvider-C-uwmcWe.js";import"./mergeRefs-BZVZ0dhZ.js";import"./index-BUpOoE4F.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-SaPVkD34.js";import"./utils-Qm7xLU3y.js";import"./Text-C9PfWAJQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Bshd2yUf.js";import"./Hidden-DCXhQTtV.js";import"./useFocusRing-eR86HLCW.js";import"./useFocus-CTtv6tdW.js";import"./TextField-Bj0PDkEJ.js";import"./Form-Cgvv5odv.js";import"./useLabel-BTkVtPxw.js";import"./Label-CQsKsXsC.js";import"./useTextField-Dr42bSM8.js";import"./useFormReset-DcxoBJFg.js";import"./useControlledState-D69o91XC.js";import"./useFocusable-BOGY22Am.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-1_TiWSqX.js";import"./FieldDescription-r1hXLVsl.js";import"./Text-CzI-SNLy.js";import"./browser-lItX59Of.js";import"./EmulatedBoldText-_TSizv1d.js";import"./Tooltip-Bkggthem.js";import"./OverlayArrow-Dkw6_o-u.js";import"./ProgressBar-Bwt4IvIC.js";import"./context-DolFftfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-6HxLbkJZ.js";import"./ReactAriaControlledValueFix-DPnGiPfN.js";import"./ContextualHelpTrigger-B1iYH_ey.js";import"./Popover-Cvi4ougU.js";import"./DialogTriggerView-D_IG8I3W.js";import"./context-CqKUxs9o.js";import"./useStatic-D2ZqCWbX.js";import"./Dialog-DZPDGKPA.js";import"./Button-Bca1GoSv.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-uE3muS2D.js";import"./RSPContexts-BRIM2Iem.js";import"./Collection-DXulOg_H.js";import"./CollectionBuilder-Qk8YBnFP.js";import"./Separator-DEM_icnQ.js";import"./SearchField-Di5tRiho.js";import"./useEvent-BymtUDWP.js";import"./SelectionManager-D0QYa18J.js";import"./useCollator-DXk_KV0D.js";import"./FocusScope-B2gr6wNX.js";import"./VisuallyHidden-VL3LzDcs.js";import"./Heading-VHTO0fC-.js";import"./Heading-C1baIQPk.js";import"./getActionGroupSlot-CM5KPANG.js";import"./LoadingSpinner-m9O8-gUX.js";import"./react-children-utilities-D2g9apgj.js";import"./onlyText-BzTbKCOy.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var T,W,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,O,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
