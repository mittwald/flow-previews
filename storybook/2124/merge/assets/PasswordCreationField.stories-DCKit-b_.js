import{r as b,j as r}from"./iframe-CVnOevS7.js";import{a as c,u as f,F as h,t as w}from"./Form-BV0DfRKx.js";import{L as i}from"./Label-CAmF3EV2.js";import{B as o}from"./Button-Cf7B0HY9.js";import{S as P}from"./Section-bMj7sGFO.js";import{A as y}from"./ActionGroup-B3X5o9oq.js";import{s as F}from"./Action-CUQVeG4t.js";import{ak as B,al as g,e as S,ac as n,am as t,an as E,F as C}from"./Modal-QfU2S1Ru.js";import"./index-nuYtCEEu.js";import"./dynamic-DEpoJ_Zh.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./clsx-B-dksMZM.js";import"./index-Cr689PiB.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./context-B1NGcly_.js";import"./browser-DLVk8Qjw.js";import"./utils-CGDhhS2B.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B_svJUl9.js";import"./Text-Bxez-FPO.js";import"./EmulatedBoldText-FqR_2DOA.js";import"./LoadingSpinner-CSIBpLRI.js";import"./Button-DX-sXAbn.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";import"./Dialog-WTjaYKjI.js";import"./RSPContexts-DjbnK2VB.js";import"./OverlayArrow-76JnWsm4.js";import"./useControlledState-DEBy32LM.js";import"./Collection-Cksyx-Vf.js";import"./CollectionBuilder-CYwEwQob.js";import"./SelectionIndicator-DnhwtZbe.js";import"./Separator-IYcFdJAY.js";import"./getActionGroupSlot-CQ6F0YI_.js";import"./useStatic-CGYI-bhE.js";import"./context-CfRoeqvW.js";import"./Popover-DBExu7Vo.js";import"./OverlayTrigger-BkfO43HH.js";import"./ControlledNotification-GhQOL8__.js";import"./ClearPropsContextView-DFZ0V7Jx.js";import"./LayoutCard-CRc28-ot.js";import"./Accordion-L3zPfCh8.js";import"./Alert-C0tO03bG.js";import"./AlertIcon-DHgwBo_e.js";import"./AlertBadge-BnMe9rDd.js";import"./Align-BLxH_lnh.js";import"./TableFooterRow-C5f7VRCm.js";import"./SkeletonText-Ba9BdoYu.js";import"./Avatar-D3cwiEC5.js";import"./AvatarStack-C8hks35D.js";import"./Badge-ByDbUbxC.js";import"./BigNumber-q4yIW4xK.js";import"./Breadcrumb-DftlKfTG.js";import"./Link-ChTVftws.js";import"./Heading-DfGW7LfL.js";import"./Legend-CYdy4Ftw.js";import"./FileCardList-DxLgTIjd.js";import"./Image-B5CmC758.js";import"./CodeBlock-BdFqEOfx.js";import"./CopyButton-B4NCpX0w.js";import"./Tooltip-Dzxj1hFf.js";import"./react-children-utilities-TDhYNC0Q.js";import"./Color-Ds-Zu7tK.js";import"./Content-BmyMaCIf.js";import"./ContextualHelpTrigger-tU_W7v1d.js";import"./CounterBadge-DTIKZj10.js";import"./DonutChart-DPPXtNJb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CmJ3l5DD.js";import"./Header-SbiS3SyG.js";import"./Initials-CMa8SWiA.js";import"./InlineCode-Bt59bwJI.js";import"./LabeledValue-DKq90b9W.js";import"./PopoverTrigger-kkn5I6qo.js";import"./Markdown-Bx_g-Nsi.js";import"./Separator-BzOj-Dtn.js";import"./Message-BI6CPN5H.js";import"./MessageSeparator-BDDP4jc7.js";import"./NavigationGroup-C6HKSd84.js";import"./Notification-BehsA8rM.js";import"./NotificationProvider-C7mDNPzU.js";import"./ProgressBar-Cz8XcWEU.js";import"./Rating-BhL8l3pQ.js";import"./Skeleton-w_dx-zb1.js";const j=(e=B)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[E.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:j()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(y,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:j(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(C,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
