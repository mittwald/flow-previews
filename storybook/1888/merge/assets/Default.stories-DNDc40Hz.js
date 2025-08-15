import{r as M,j as r}from"./iframe-CHDu_H0e.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Dc3Fq_C4.js";import{L as P}from"./Label-C1IZgxKk.js";import{u as N,F as z,a as U}from"./Form-J0Z5JjQu.js";import{s as Y}from"./Action-BkMFmAtx.js";import{B as h}from"./Button-Dmc7YjrG.js";import{m as Z}from"./IconWarning-Cf1n4vGG.js";import{C as G}from"./CopyButton-fzQJAdNs.js";import"./PropsContextProvider-Z6o4UsMH.js";import"./mergeRefs-SbFyzkYd.js";import"./index-DtMG4pjF.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CKgwUKxI.js";import"./utils-DYZAD9ft.js";import"./Text-DpQKzoec.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DC1YgkeM.js";import"./Hidden-Crmdv3RK.js";import"./useFocusRing-BOwbbtAH.js";import"./useFocus-C89269kJ.js";import"./TextField-DCfchb8N.js";import"./Form-BFPhVCnm.js";import"./useLabel-1w2C-Jw1.js";import"./Label-LmJ-o8gi.js";import"./useTextField-bDvKNILe.js";import"./useFormReset-Ct9qNa2Y.js";import"./useControlledState-DzyFh4kD.js";import"./useFocusable-vuFpOsuk.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CyvcfapH.js";import"./FieldDescription-D82FO0nU.js";import"./Text-mNtFSOkr.js";import"./browser-mouKiHlp.js";import"./EmulatedBoldText-Bkss-Gur.js";import"./Tooltip-DBLtu_V5.js";import"./OverlayArrow-BpSuH-di.js";import"./ProgressBar-C34PP_48.js";import"./context-Bzaz4S39.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-B31V_hT3.js";import"./ReactAriaControlledValueFix-BjDFD4yr.js";import"./ContextualHelpTrigger-D7bOpw5i.js";import"./Popover-Cu5EZYnv.js";import"./DialogTriggerView-CT9wuhNv.js";import"./context-BsLhxCGe.js";import"./useStatic-ByFeMtaE.js";import"./Dialog-CCYlg5iI.js";import"./Button-Rg6_nSUL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-UC_sG4c4.js";import"./RSPContexts-CZTMu11O.js";import"./Collection-BuIb3AWp.js";import"./CollectionBuilder-CF7zY--7.js";import"./Separator-_126g1b9.js";import"./SearchField-DemnD7Hf.js";import"./useEvent-CII2lm4p.js";import"./SelectionManager-C-zRxePL.js";import"./useCollator-P2wX32qN.js";import"./FocusScope-CpdigEHe.js";import"./VisuallyHidden-BP6BNrRi.js";import"./Heading-BSC9400-.js";import"./Heading-B1311qyI.js";import"./getActionGroupSlot-DDu1koB4.js";import"./LoadingSpinner-BjRJkl53.js";import"./react-children-utilities-BeEMfOeV.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
