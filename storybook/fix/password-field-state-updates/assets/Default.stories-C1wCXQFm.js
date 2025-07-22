import{r as E,j as r}from"./iframe-B7LyKmrW.js";import{d as A,e as I,P as a,a as K,s,c as M}from"./PasswordCreationField-BOMwOGfo.js";import{L as h}from"./Label-GaOPpfpv.js";import{u as N,F as z,a as U}from"./Form-B91KfbSi.js";import{s as Y}from"./Action-CvLnil_l.js";import{B as u}from"./Button-Ds6YhjxA.js";import{m as Z}from"./IconWarning-B2C8hMVq.js";import{C as $}from"./CopyButton-DUuWR8wk.js";import"./PropsContextProvider-BHFGowBc.js";import"./mergeRefs-DMoFTSBP.js";import"./index-DRIChXb_.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-52nE40UF.js";import"./utils-C7pz24DF.js";import"./Text-54Sx_nhu.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-BkSjpW6j.js";import"./useFocusRing-DxiExAh_.js";import"./useFocus-S4LYa827.js";import"./Input-bFGBOkXz.js";import"./Hidden-DplB-rWb.js";import"./TextField-x_YXs-HX.js";import"./Form-DFMSXVCD.js";import"./useLabel-B_uxGEkZ.js";import"./Label-DSgSzVuQ.js";import"./useTextField-DpE7FPF6.js";import"./useFormReset-Cbj20zLi.js";import"./useControlledState-QzhULpBn.js";import"./useFocusable-UsZUFP92.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CQSXAN4S.js";import"./FieldDescription-BOBiES0b.js";import"./Text-DUoUD__5.js";import"./browser-YA20U_IT.js";import"./EmulatedBoldText-CH7hguL6.js";import"./Tooltip-Dm7qDLTC.js";import"./OverlayArrow-BOgzAv2q.js";import"./ProgressBar-D1vTXEVZ.js";import"./context-Bp1vmlVu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BSmgV4Fs.js";import"./ReactAriaControlledValueFix-CjLV8Mtp.js";import"./ContextualHelpTrigger-B-EPVEFT.js";import"./Popover-DmAKuv-J.js";import"./DialogTriggerView-BgzqeZLF.js";import"./context-Bn8MzZjp.js";import"./useStatic-ae9ekjn3.js";import"./Dialog-CbKwT-DG.js";import"./Button-CnMvl_pE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BUy08s3B.js";import"./RSPContexts-mttXOxPq.js";import"./Collection-BACulWrY.js";import"./CollectionBuilder-1KlzsV_3.js";import"./Separator-CilFnH5A.js";import"./SearchField-VyG8Gz3p.js";import"./SelectionManager-CkybOUE-.js";import"./useEvent-BgU4gnPl.js";import"./useCollator-B3crgtAr.js";import"./FocusScope-cqMoFFNL.js";import"./VisuallyHidden-BpBET9_R.js";import"./Heading-BKIuFTnU.js";import"./Heading-CZiTCk5Q.js";import"./getActionGroupSlot-HbE0eD39.js";import"./LoadingSpinner-D8va-Paf.js";import"./react-children-utilities-DdKWegDI.js";import"./onlyText-f9BITZXr.js";const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return I(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[M.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},ce={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},c={render:()=>{const e=K.fromDeclaration(H),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async()=>await Y(2e3),children:[r.jsx(U,{rules:{required:!0,validate:k(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},l={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx($,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,C,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
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
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,l as WithCopyButton,d as WithCustomButtons,c as WithForm,p as WithPlaceholder,le as __namedExportsOrder,ce as default};
