import{r as M,j as r}from"./iframe-BkQEXHdV.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DvAlCjNr.js";import{L as P}from"./Label-DCwzji4R.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DpSOJqhG.js";import{s as Y}from"./Action-ZxRK_-5p.js";import{B as h}from"./Button-Pi6ts98U.js";import{p as Z}from"./IconWarning-Bhg2W068.js";import{C as G}from"./CopyButton-Cm5RDCvt.js";import"./index-Cun1SEai.js";import"./dynamic-BBWe3ygL.js";import"./PropsContextProvider-DGcDvaD0.js";import"./mergeRefs-CrNR4Adf.js";import"./index-NrWjSaDr.js";import"./clsx-B-dksMZM.js";import"./FieldError-DGWLCZ3i.js";import"./utils-vh8nJaNh.js";import"./Text-vqf5-lqk.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-048JPUOO.js";import"./useFocusRing-DgjuUHXy.js";import"./useFocus-DvrdYcoe.js";import"./Input-B_J8uYe3.js";import"./Hidden-B12OlcMW.js";import"./TextField-C0qXDBxZ.js";import"./context-Df1kKepL.js";import"./Form-BhNATljn.js";import"./useLabel-B9G_gEh3.js";import"./Label-CmAFKzLd.js";import"./useTextField-ZuBW_ptm.js";import"./useFormReset-C2GAx1Zc.js";import"./useControlledState-DaeuqNOc.js";import"./useFocusable-E_oKRPWi.js";import"./useFormValidation-O3WohNjc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-1DZO4FvY.js";import"./FieldDescription-H6gY4iu-.js";import"./Text-waR3uY_i.js";import"./browser-T6JBIPNk.js";import"./EmulatedBoldText-DAPjbogn.js";import"./Tooltip-rlTVK9C_.js";import"./ClearPropsContextView-DluELhC2.js";import"./ProgressBar-BZ-kanOy.js";import"./context-DYNAGC-2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-C-gsK0Kk.js";import"./ReactAriaControlledValueFix-CvjKg_5M.js";import"./ContextualHelpTrigger-BSlNo94L.js";import"./Popover-8rOZkqNf.js";import"./DialogTriggerView-wkk6S007.js";import"./context-D6bN450f.js";import"./useStatic-D2LoWVgv.js";import"./Button-U99YD9dQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CS8Sp9_K.js";import"./RSPContexts-BoauDkAB.js";import"./FocusScope-1Unh1ODV.js";import"./useCollator-CckG7hwg.js";import"./VisuallyHidden-BJPXQOEU.js";import"./Collection-41evgXm1.js";import"./CollectionBuilder-CMEP5N_o.js";import"./Separator-ITSOrukA.js";import"./SelectionManager-B2eDCuA_.js";import"./useEvent-XpLfJ4Ej.js";import"./Heading-CFJEQMAA.js";import"./Heading-BV1AUrOJ.js";import"./useManagedValue-BoDypr3f.js";import"./getActionGroupSlot-rKcLr1EF.js";import"./LoadingSpinner-BoU0TUya.js";import"./react-children-utilities-D51SXAgD.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
