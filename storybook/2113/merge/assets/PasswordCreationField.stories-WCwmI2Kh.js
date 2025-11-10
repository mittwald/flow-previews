import{r as b,j as r}from"./iframe-D4AGuMnx.js";import{a as c,u as f,F as h,t as w}from"./Form-D11r0Dhg.js";import{L as i}from"./Label-Uu7W5RgC.js";import{B as o}from"./Button-DtTeM47l.js";import{S as P}from"./Section-C7ZxuYfk.js";import{A as y}from"./ActionGroup-CVIQhVAR.js";import{s as F}from"./Action-BJsLMg4b.js";import{ak as B,al as g,e as S,ac as n,am as t,an as E,F as C}from"./Modal-tGW6fwkz.js";import"./index-nuYtCEEu.js";import"./dynamic-oZwQWaGw.js";import"./flowComponent-BIyscBzo.js";import"./index-Cd_u2pV_.js";import"./clsx-B-dksMZM.js";import"./index-DNvdHJqk.js";import"./useLocalizedStringFormatter-BNVQM74q.js";import"./context-Bzk-5tqO.js";import"./browser-3OZPWisM.js";import"./utils-CqMmhAxq.js";import"./ProgressBar-_bs3wo-c.js";import"./Hidden-BnByJu4s.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BC3tK9kj.js";import"./Text-BtpbrdrH.js";import"./EmulatedBoldText-IEU2-xTn.js";import"./LoadingSpinner-u-oBwaFl.js";import"./Button-84EHC3SL.js";import"./useFocusRing-B0_rzNcg.js";import"./useFocusable-qdXI3c9W.js";import"./Dialog-Dct0khyO.js";import"./RSPContexts-B4Pxvc-Q.js";import"./OverlayArrow-DclzRyUb.js";import"./useControlledState-DvYaxqI_.js";import"./Collection-BeK_S4wY.js";import"./CollectionBuilder-CWpdOayg.js";import"./SelectionIndicator-D5j5oFjn.js";import"./Separator-YST-GtXN.js";import"./getActionGroupSlot-y53Ggupv.js";import"./useStatic-CK2cw9Tx.js";import"./context-DUgKYd_B.js";import"./Popover-dCAEc0Wh.js";import"./OverlayTrigger-Dm3E0-9T.js";import"./ControlledNotification-RGp8id5u.js";import"./ClearPropsContextView-BN-YBkpQ.js";import"./LayoutCard-DtuqdXZV.js";import"./Accordion-Ci8LO9GL.js";import"./Alert-DRlhPKAM.js";import"./AlertIcon-DIdf3aQ3.js";import"./AlertBadge-_JwpxNnD.js";import"./Align-7TnWq-Gv.js";import"./TableFooterRow-Dfn6es0D.js";import"./SkeletonText-Bz6UmpGu.js";import"./Avatar-Cuj_93mY.js";import"./AvatarStack-DXokn6ok.js";import"./Badge-BJDG9oB6.js";import"./BigNumber-Dhgfv4nR.js";import"./Breadcrumb-B79bCRw5.js";import"./Link-BLPRVcLK.js";import"./Heading-BsaQzqWp.js";import"./Legend-SmnDI-CC.js";import"./FileCardList-CHAaonsB.js";import"./Image-BkVvTdPU.js";import"./CodeBlock-C0V9miuL.js";import"./CopyButton-D7hetntY.js";import"./Tooltip-BSoUWhLw.js";import"./react-children-utilities-Cr8KMn7a.js";import"./Color-BvEEtghO.js";import"./Content-CrST6Q2Z.js";import"./ContextualHelpTrigger-Du-yR4dj.js";import"./CounterBadge-DGQicx2G.js";import"./DonutChart-DycP2oAV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BfL5ZHfz.js";import"./Header-ByxBqB9K.js";import"./Initials-Db_RIkxH.js";import"./InlineCode-DuyDsWxz.js";import"./LabeledValue-UbfXjNpO.js";import"./PopoverTrigger-CvAH8Qs9.js";import"./Markdown-m3hztiRY.js";import"./Separator-Bft2GaAL.js";import"./Message-CKIMU6VV.js";import"./MessageSeparator-EOk3gZe0.js";import"./NavigationGroup-dyXYy0re.js";import"./Notification-CH_kjSuU.js";import"./NotificationProvider-Yu7V6SyN.js";import"./ProgressBar-CF2CxjRB.js";import"./Rating-D2_jK4Ep.js";import"./Skeleton-Ju_lHyZD.js";const j=(e=B)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[E.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:j()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(y,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:j(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(C,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
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
        validate: generatePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <PasswordCreationField defaultValue={""} isInvalid>
          <Label>Password</Label>
          <Button>asd</Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </PasswordCreationField>
        <PasswordCreationField defaultValue={""}>
          <Label>Password</Label>
          <Button>asd</Button>
        </PasswordCreationField>
      </Form>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const de=["Default","WithForm","WithFieldError","WithFocus"];export{l as Default,u as WithFieldError,p as WithFocus,d as WithForm,de as __namedExportsOrder,le as default};
