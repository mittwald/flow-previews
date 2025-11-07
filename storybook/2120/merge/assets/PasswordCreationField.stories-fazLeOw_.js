import{r as w,j as r}from"./iframe-C_rr3K7B.js";import{c,u as f,F as h,t as y}from"./Form-3eerynkL.js";import{L as i}from"./Label-vkrcFW64.js";import{R as x,S as b}from"./ResetButton-4apoh99L.js";import{B as t}from"./Button-DCjyK8f2.js";import{S as B}from"./Section-Bi-R-_iR.js";import{A as S}from"./ActionGroup-DsFsbzBm.js";import{s as F}from"./Action-CIZ0694o.js";import{al as g,am as E,e as C,ad as n,an as o,ao as R,F as V}from"./Modal-BJ-aQIK6.js";import"./index-nuYtCEEu.js";import"./dynamic-BFlSKedW.js";import"./flowComponent-B_W8EGz8.js";import"./index-BuJm22LX.js";import"./clsx-B-dksMZM.js";import"./index-BjYnWwux.js";import"./useLocalizedStringFormatter-D9q7PMDi.js";import"./context-CfcUR6DZ.js";import"./browser-E0G6tvzo.js";import"./utils-C4h6fUQR.js";import"./ProgressBar-BfFuAkhC.js";import"./Hidden-BRyX-IhD.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DU_TTROa.js";import"./Text-BsSJXbbR.js";import"./EmulatedBoldText-C3mdhbnh.js";import"./LoadingSpinner-CRVrq6rR.js";import"./Button-B3n1VqY_.js";import"./useFocusRing-BdtY4hiP.js";import"./useFocusable-BgYFD5eH.js";import"./Dialog-YSlPVfGO.js";import"./RSPContexts-zcKIqYdj.js";import"./OverlayArrow-RRaewUl9.js";import"./useControlledState-D5USuG2w.js";import"./Collection-CoTlEKMj.js";import"./CollectionBuilder-DkbboSd2.js";import"./SelectionIndicator-D9WeA2Ww.js";import"./Separator-D4h-iSnJ.js";import"./getActionGroupSlot-BxvOG7b1.js";import"./useStatic-BCUpaw5v.js";import"./context-D3P4luPW.js";import"./Popover-C6S62YvO.js";import"./OverlayTrigger-Bcj7IRSG.js";import"./ControlledNotification-DUF7vXg5.js";import"./ClearPropsContextView-BMWVcOQ4.js";import"./LayoutCard-8_hd1wkR.js";import"./Accordion-6HjJt4r7.js";import"./Alert-BSB-fYgU.js";import"./AlertIcon-iBCzN4pZ.js";import"./AlertBadge-DHbgVCiz.js";import"./Align-C5z7nPeq.js";import"./TableFooterRow-DXFd1_i9.js";import"./SkeletonText-DfID-jhr.js";import"./Avatar-BOkLjthK.js";import"./AvatarStack-CO_AH2VC.js";import"./Badge-C80oNvTr.js";import"./BigNumber-B_HOaw1W.js";import"./Breadcrumb-C4lBjv75.js";import"./Link-RtgN4cbU.js";import"./Heading-zxknCt_n.js";import"./Legend-Cfy0QGqD.js";import"./FileCardList-UHBGSkAH.js";import"./Image-D6oez4WD.js";import"./CodeBlock-XVb8pDFG.js";import"./CopyButton-ClrMNUuq.js";import"./Tooltip-GUcZ5Baq.js";import"./react-children-utilities-DT9uJVie.js";import"./Color-PNql-Ck2.js";import"./Content-RrSqeXWH.js";import"./ContextualHelpTrigger-Cf4bGUz3.js";import"./CounterBadge-CiLO3wd7.js";import"./DonutChart-BMa5iWRZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DCbHKh1j.js";import"./Header-BW42WVk0.js";import"./Initials-CjZUsWxi.js";import"./InlineCode-DkUomSPt.js";import"./LabeledValue-CDQ_6OLg.js";import"./PopoverTrigger-BmTXQmKy.js";import"./Markdown-BGldsMFH.js";import"./Separator-BXsRa8Lp.js";import"./Message-BzZ2-vNa.js";import"./MessageSeparator-slNvzfna.js";import"./NavigationGroup-Ch7Q2DeX.js";import"./Notification-BtUIO_Xq.js";import"./NotificationProvider-Buvl5LDa.js";import"./ProgressBar-Ck_QTNWr.js";import"./Rating-CNdcbfDe.js";import"./Skeleton-7WPy-KOc.js";const P=(e=g)=>{const a=w.useMemo(()=>E.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return C(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,v=L("submit"),j={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[R.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),v(s)},a=f({defaultValues:{user:""}}),m=y();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(B,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:P()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(S,{children:[r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:P(j)},name:"password",children:r.jsxs(n,{validationPolicy:j,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return w.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const ce=["Default","WithForm","WithFieldError","WithFocus"];export{l as Default,u as WithFieldError,p as WithFocus,d as WithForm,ce as __namedExportsOrder,pe as default};
