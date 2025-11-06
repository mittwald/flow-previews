import{r as b,j as r}from"./iframe-Dld40DlB.js";import{a as c,u as f,F as h,t as w}from"./Form-vOopptf9.js";import{L as i}from"./Label-B7H6jTM3.js";import{B as o}from"./Button-DIo8wcxN.js";import{S as P}from"./Section-D4-3IMps.js";import{A as y}from"./ActionGroup-BphLBlE9.js";import{s as F}from"./Action-BpHcMUnj.js";import{ak as B,al as g,e as S,ac as n,am as t,an as E,F as C}from"./Modal-BGl6IXQ3.js";import"./index-nuYtCEEu.js";import"./dynamic-DLhXud-a.js";import"./flowComponent-g3olMzzw.js";import"./index-Dshvly-6.js";import"./clsx-B-dksMZM.js";import"./index-CruVUoMH.js";import"./useLocalizedStringFormatter-BddSeuov.js";import"./context-CvXLvg4O.js";import"./browser-bPFV2Ji3.js";import"./utils-D4Q7WLr3.js";import"./ProgressBar-A7FXjRZm.js";import"./Hidden-CiXaNdIj.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Bslq8B7t.js";import"./Text-TesoHDfv.js";import"./EmulatedBoldText-Df4Xti5W.js";import"./LoadingSpinner-C26eHY8y.js";import"./Button-rvCZddFR.js";import"./useFocusRing-BAtU7oif.js";import"./useFocusable-BrkdujEf.js";import"./Dialog-BJVHvNg4.js";import"./RSPContexts-DRmXF-Vp.js";import"./OverlayArrow-J381LXSg.js";import"./useControlledState-BaXUyl3S.js";import"./Collection-BcdNyWqm.js";import"./CollectionBuilder-DXJ4p0H3.js";import"./SelectionIndicator-B4HmttaN.js";import"./Separator-DQHCwqOC.js";import"./getActionGroupSlot-DKSLC32H.js";import"./useStatic-C-DsDLNz.js";import"./context-DLHVmjQX.js";import"./Popover-XDo3MRMz.js";import"./OverlayTrigger-BVUj_QQK.js";import"./ControlledNotification-xf49NdLG.js";import"./ClearPropsContextView-Cho7uRH3.js";import"./LayoutCard-IMl7pf0m.js";import"./Accordion-H2q-twcf.js";import"./Alert-CVS5nIOt.js";import"./AlertIcon-CxtEeq0v.js";import"./AlertBadge-Do9Ij39K.js";import"./Align-Bfd8WAYD.js";import"./TableFooterRow-e3hxtKbE.js";import"./SkeletonText-KItJqAsI.js";import"./Avatar-BxdFEafq.js";import"./AvatarStack-L4BJfetb.js";import"./Badge-DbOHK1xn.js";import"./BigNumber-ChxB-lTV.js";import"./Breadcrumb-BExRUgBv.js";import"./Link-Henk7h9t.js";import"./Heading-BAwA_6k1.js";import"./Legend-OzUmegYt.js";import"./FileCardList-C7wc0e9o.js";import"./Image-sQRjHzgr.js";import"./CodeBlock-C93BO0Az.js";import"./CopyButton-wzex5dN6.js";import"./Tooltip-Cbpl3jQW.js";import"./react-children-utilities-Dtb1FnZ8.js";import"./Color-BciKfqSt.js";import"./Content-DhIy2dEF.js";import"./ContextualHelpTrigger-B-SoQJrr.js";import"./CounterBadge-Blg6w3Fx.js";import"./DonutChart-B36Knnf8.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGmRgtWI.js";import"./Header-BAt7i-pe.js";import"./Initials-Btu9tAbd.js";import"./InlineCode-y_TJhLt6.js";import"./LabeledValue-UBM9yNK9.js";import"./PopoverTrigger-BYqjO8bC.js";import"./Markdown-C7mhQjBr.js";import"./Separator-HwrAv7Ne.js";import"./Message-BRMGC2b4.js";import"./MessageSeparator-B4jPz4Lc.js";import"./NavigationGroup-Bm8cGBg1.js";import"./Notification-Cb6Pnxnq.js";import"./NotificationProvider-BqpDejop.js";import"./ProgressBar-D0XE8XVg.js";import"./Rating-gEDdyBiO.js";import"./Skeleton-HkK15y9K.js";const j=(e=B)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[E.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:j()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(y,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:j(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(C,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
