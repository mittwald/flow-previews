import{r as E,j as r}from"./iframe-ioB74BFE.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-BigEYGZO.js";import{L as h}from"./Label-Bf-bWzV0.js";import{u as M,F as N,a as z}from"./Form-DoPvWglD.js";import{s as U}from"./Action-PE71Lbss.js";import{B as u}from"./Button-MpugPYzI.js";import{m as Y}from"./IconWarning-DcmAhB0m.js";import{C as Z}from"./CopyButton-oIIy6pA7.js";import"./PropsContextProvider-DIQ-3Z-W.js";import"./mergeRefs-Bc9_QzvA.js";import"./index-DxUCKuoS.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Z5j2ND32.js";import"./utils-B4cCkl7w.js";import"./Text-CCXZaIsU.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-DEqMnOwE.js";import"./useFocusRing-CU7EmQP7.js";import"./useFocus-Cm5D2sPa.js";import"./Input-Bztt3-Ug.js";import"./Hidden-BUUKH5FE.js";import"./TextField-DC2JuRaU.js";import"./Form-u9b0IMfB.js";import"./useLabel-CB1mDCyy.js";import"./Label-Ci4HPtMl.js";import"./useTextField-udwT8Fkv.js";import"./useFormReset-Ik_MynpH.js";import"./useControlledState-DPunIX8S.js";import"./useFocusable-2c5mTAR9.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-JtFjK6bM.js";import"./FieldDescription-eGz-n7rX.js";import"./Text-BZaQwICB.js";import"./browser-BI2T8H6c.js";import"./EmulatedBoldText-C5-k4pIu.js";import"./Tooltip-DfoiS9Ji.js";import"./OverlayArrow-BGE95OS1.js";import"./ProgressBar-6K_Q5ytM.js";import"./context-BPL8pm8m.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-aWkOtTsz.js";import"./ReactAriaControlledValueFix-CIKIaPDy.js";import"./context-hIhIfxI4.js";import"./useStatic-BxLAdQVw.js";import"./ContextualHelpTrigger-4lUfMOVW.js";import"./Popover-rrnYjHMt.js";import"./DialogTriggerView-CvOFscXk.js";import"./Dialog-CftsoPvf.js";import"./Button-C3ElHjZf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D3I07Rsr.js";import"./RSPContexts-CvEKqGkH.js";import"./Collection-DiJArqpe.js";import"./CollectionBuilder-BSEB-cLG.js";import"./Separator-RUGTe1Gb.js";import"./SearchField-D30c1-ND.js";import"./SelectionManager-BJVavWLX.js";import"./useEvent-WwaZxlmw.js";import"./useCollator-CLy1qn58.js";import"./FocusScope-Dmal2fI9.js";import"./VisuallyHidden-BOO0yHnw.js";import"./Heading-CLweJIMG.js";import"./Heading-DlB0ufOw.js";import"./getActionGroupSlot-CF5EeO16.js";import"./LoadingSpinner-DAUxEQn_.js";import"./react-children-utilities-BtON-wCb.js";import"./onlyText-DpRrm7YZ.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation()
      }} name="password">
          <PasswordCreationField validationPolicy={policy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,le as default};
