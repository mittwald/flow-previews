import{r as M,j as r}from"./iframe-JrijvI0G.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-C-amgVZ3.js";import{L as P}from"./Label-BWdEIo8l.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-ChtMtnS4.js";import{s as Y}from"./Action-CunTtwFt.js";import{B as h}from"./Button-nOLp9HyP.js";import{p as Z}from"./IconWarning-B3U3_U2s.js";import{C as G}from"./CopyButton-yFxpCMxK.js";import"./index-Cun1SEai.js";import"./dynamic-BUc0KwfX.js";import"./PropsContextProvider-Bc6JGim9.js";import"./mergeRefs-CbRd_Ras.js";import"./index-BPCP2ZZE.js";import"./clsx-B-dksMZM.js";import"./FieldError-B0ZHUsLp.js";import"./utils-DhZkrhHH.js";import"./Text-Bm8Zb_oa.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DdGbTH8K.js";import"./useFocusRing-DCbTuOGO.js";import"./useFocus-DA61-eEI.js";import"./Input-B9FmC8HN.js";import"./Hidden-CHpGmdBq.js";import"./TextField-Dy-QQf8E.js";import"./context-SLDg-fw2.js";import"./Form-Vksxts5m.js";import"./useLabel-D5nQ4vXC.js";import"./Label-1jXHzd37.js";import"./useTextField-02gFnEcc.js";import"./useFormReset-Bl0dawgu.js";import"./useControlledState-DQPwS-UF.js";import"./useFocusable-DIk21gkV.js";import"./useFormValidation-OftsP-u_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-KC3s-9B5.js";import"./FieldDescription-C6floWpY.js";import"./Text-9s7Vdafx.js";import"./browser-eHAjn9uV.js";import"./EmulatedBoldText-BVZ71ko2.js";import"./Tooltip-C5LUaqFr.js";import"./ClearPropsContextView-Dl_oHLSA.js";import"./ProgressBar-D10mUZdz.js";import"./context-CnkMg4nA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-M08v5G9w.js";import"./ReactAriaControlledValueFix-BKaedhI2.js";import"./ContextualHelpTrigger-1-THRkGe.js";import"./Popover-irUcUI-O.js";import"./DialogTriggerView-DOh3nc4_.js";import"./context-CS_K62PD.js";import"./useStatic-9jHtrOTK.js";import"./Button-Bp13GR3E.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JaoXEhrO.js";import"./RSPContexts-bEimFc0k.js";import"./FocusScope-Bwbpfbbo.js";import"./useCollator-ChdaOTfc.js";import"./VisuallyHidden-B4SYhrOy.js";import"./Collection-yP15xrib.js";import"./CollectionBuilder-CnCpguDd.js";import"./Separator-D6-9qD1D.js";import"./SelectionManager-C2kTlReE.js";import"./useEvent-BTKtfW_h.js";import"./Heading-C_XHAp4M.js";import"./Heading-BW0daRbe.js";import"./useManagedValue-BdIduRf5.js";import"./getActionGroupSlot-BuUDRoIK.js";import"./LoadingSpinner-BpDSxo2f.js";import"./react-children-utilities-C5pwjcTQ.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Po=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,Po as __namedExportsOrder,ho as default};
