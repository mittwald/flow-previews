import{r as M,j as r}from"./iframe-sBvqvo7_.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-CdURpiHs.js";import{L as P}from"./Label-DV1oDC-Q.js";import{u as N,F as z,a as U}from"./Form-BZahs9im.js";import{s as Y}from"./Action-DhYbBupW.js";import{B as h}from"./Button-J4OQPVw4.js";import{m as Z}from"./IconWarning-BMngykPL.js";import{C as G}from"./CopyButton-BUDj8mFz.js";import"./PropsContextProvider-TllVeCFj.js";import"./mergeRefs-5pXsIHJc.js";import"./index-7PGhSu6n.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D_EBRzZI.js";import"./utils-B2LriU5l.js";import"./Text-CAc83Hwb.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DK1ZbmQa.js";import"./Hidden-DkwdQ2ow.js";import"./useFocusRing-B1VapAs-.js";import"./useFocus-CVs-BOzj.js";import"./TextField-Dg3JsHEK.js";import"./Form-DRweiQ4m.js";import"./useLabel-xAWuGzS8.js";import"./Label-CX5Sx3US.js";import"./useTextField-D2S0T5Ek.js";import"./useFormReset-CzZ7gXc_.js";import"./useControlledState-B_tC48lN.js";import"./useFocusable-DA4OWrdg.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BOIuciEr.js";import"./FieldDescription-BhaZsciE.js";import"./Text-C6wVel0M.js";import"./browser-DLpa1UK_.js";import"./EmulatedBoldText-MyVSeX0t.js";import"./Tooltip-DrGOEbYH.js";import"./OverlayArrow-CI59sRmD.js";import"./ProgressBar-BAnWuAWU.js";import"./context-C3R-osbZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-ClADd5Z4.js";import"./ReactAriaControlledValueFix-DuPmXFx6.js";import"./ContextualHelpTrigger-Bgh9slnz.js";import"./Popover-Bl_o42lY.js";import"./DialogTriggerView-EBaL5yq6.js";import"./context-DwGzY_iF.js";import"./useStatic-Mefs6JzB.js";import"./Dialog-BQE4o9PA.js";import"./Button-C8-y5amo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-seZ0T8mb.js";import"./RSPContexts-E7RieiUt.js";import"./Collection-Cp6lnTRm.js";import"./CollectionBuilder-D_PhybFO.js";import"./Separator-CaNgrCXh.js";import"./SearchField-B2Einoci.js";import"./useEvent-vEElTzYQ.js";import"./SelectionManager-D2TfpwIm.js";import"./useCollator-B6u88yWd.js";import"./FocusScope-Emgqt3PD.js";import"./VisuallyHidden-DUx1qTAb.js";import"./Heading-DL2JXIVD.js";import"./Heading-BmYY4TiC.js";import"./getActionGroupSlot-ZeckI-n0.js";import"./LoadingSpinner-DAp3c-UZ.js";import"./react-children-utilities-CIcsY9Iy.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
