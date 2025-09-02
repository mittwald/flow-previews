import{r as M,j as r}from"./iframe-D8FrJ-CZ.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-D1oCdCmp.js";import{L as P}from"./Label-Cw_HB0L8.js";import{u as N,F as z,a as U}from"./Form-DWHZtf8w.js";import{s as Y}from"./Action-_fiDaeQa.js";import{B as h}from"./Button-Cq__NSNu.js";import{m as Z}from"./IconWarning-C11FXGxU.js";import{C as G}from"./CopyButton-CXcn9DbF.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DUyd9_2U.js";import"./utils-DLru3qrQ.js";import"./Text-CjVOmJR3.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CHBQvVuc.js";import"./Hidden-DLVb5zGs.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocus-_KFCgimG.js";import"./TextField-DhjdGSid.js";import"./Form-DsyloFzD.js";import"./useLabel-DAKRqT8J.js";import"./Label-CJkrjybq.js";import"./useTextField-mqiYsdTK.js";import"./useFormReset-BMZp-ADn.js";import"./useControlledState-Bhtz6D6k.js";import"./useFocusable-BXg3nN8-.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-6eoAimLP.js";import"./FieldDescription-fOgrhKsc.js";import"./Text-CijQgHlf.js";import"./browser-Df0WU9AE.js";import"./EmulatedBoldText-CzquwV9M.js";import"./Tooltip-BZxLCvSP.js";import"./OverlayArrow-DjgfcPnj.js";import"./ProgressBar-DaMaURS1.js";import"./context-Dz2Qbbtu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./ReactAriaControlledValueFix-CujzpT_Y.js";import"./ContextualHelpTrigger-CJs2pZHp.js";import"./Popover-D_AUH0xc.js";import"./DialogTriggerView-C-13EtHB.js";import"./context-DfaRjifq.js";import"./useStatic-3eGZwKWm.js";import"./Dialog-D2aL6iTu.js";import"./Button-DVdJDgqt.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mcSHbC1W.js";import"./RSPContexts-DvajV3uw.js";import"./Collection-BWh0MO5P.js";import"./CollectionBuilder-D7rkl-fZ.js";import"./Separator-Dp29JyT-.js";import"./SearchField-BVNSbwCA.js";import"./useEvent-TvzQ57Lp.js";import"./SelectionManager-BHHDa5mG.js";import"./useCollator-D1vKzkof.js";import"./FocusScope-BCf9GP_l.js";import"./VisuallyHidden-HCxlUedB.js";import"./Heading-BCUHArUZ.js";import"./Heading-BoE0fvKk.js";import"./getActionGroupSlot-kdQR9GNf.js";import"./LoadingSpinner-Cw9GFgG6.js";import"./react-children-utilities-97CNfjPN.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
