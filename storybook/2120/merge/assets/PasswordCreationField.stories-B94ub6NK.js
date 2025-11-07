import{r as w,j as r}from"./iframe-BD-_0iQW.js";import{c,u as f,F as h,t as y}from"./Form-3QX93OZP.js";import{L as i}from"./Label-BHkQ1Mdn.js";import{R as x,S as b}from"./ResetButton-6xPBuxy5.js";import{B as t}from"./Button-Daqq-bhO.js";import{S as B}from"./Section-Bcwz73Fs.js";import{A as S}from"./ActionGroup-L6iCTp2m.js";import{s as F}from"./Action-DGkp9jQR.js";import{al as g,am as E,e as C,ad as n,an as o,ao as R,F as V}from"./Modal-DAvTyZys.js";import"./index-nuYtCEEu.js";import"./dynamic-Bn8R82lj.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./clsx-B-dksMZM.js";import"./index-CwlJevdL.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./context-CVtdtufW.js";import"./browser-CsfwbWLp.js";import"./utils-DC-uQ7gt.js";import"./ProgressBar-DRtXHYQ6.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-COe6pc-P.js";import"./Text-BiRW2WuP.js";import"./EmulatedBoldText-C35HxZ7Y.js";import"./LoadingSpinner-BgQGLDYl.js";import"./Button-DxIzcvDZ.js";import"./useFocusRing-ohgATb1P.js";import"./useFocusable-DN1gz0ZC.js";import"./Dialog-B7aUPBh_.js";import"./RSPContexts-CSfMLF9v.js";import"./OverlayArrow-Roh2YmoW.js";import"./useControlledState-B9_9qNA0.js";import"./Collection-DmyA85a8.js";import"./CollectionBuilder-BVb55qBm.js";import"./SelectionIndicator-BYFUj2bk.js";import"./Separator-BuFHs16i.js";import"./getActionGroupSlot-DF5uOUtt.js";import"./useStatic-7iZUYjuS.js";import"./context-9lnVgACy.js";import"./Popover-CLHMqo5N.js";import"./OverlayTrigger-CEYU_-ng.js";import"./ControlledNotification-B9B4fBZF.js";import"./ClearPropsContextView-C6q86AoL.js";import"./LayoutCard-Bu_MxQLX.js";import"./Accordion-Dmvu-STy.js";import"./Alert-BHqt2Xmz.js";import"./AlertIcon-C-1FhtD4.js";import"./AlertBadge-C_bKX3Tw.js";import"./Align-BU9LqP1d.js";import"./TableFooterRow-Dh87MABj.js";import"./SkeletonText-BEBErV7l.js";import"./Avatar-ptAthZyD.js";import"./AvatarStack-pX77Wx2n.js";import"./Badge-Cq8W5IuK.js";import"./BigNumber-BZMSwxWy.js";import"./Breadcrumb-B_2EqmLA.js";import"./Link--c0KgJdM.js";import"./Heading-CKSpOG-B.js";import"./Legend-Dt8JNF07.js";import"./FileCardList-CoobVF0p.js";import"./Image-wyVjZedI.js";import"./CodeBlock-B7SIDcrt.js";import"./CopyButton-DNanLKd-.js";import"./Tooltip-CQSPANHc.js";import"./react-children-utilities-CYfepbhx.js";import"./Color-CKMFQpU8.js";import"./Content-D_2aIVNk.js";import"./ContextualHelpTrigger-ChW-2k3k.js";import"./CounterBadge-zIMO9qVK.js";import"./DonutChart--oUMGKT6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGcFcvk0.js";import"./Header-w0dLREy2.js";import"./Initials-sAJyyrQ_.js";import"./InlineCode-DOqa4S9W.js";import"./LabeledValue-BJ2qJMnJ.js";import"./PopoverTrigger-DQLZ359g.js";import"./Markdown-gIXFEqIp.js";import"./Separator-BuhULCN1.js";import"./Message-D5ycG96F.js";import"./MessageSeparator-1pn-RMid.js";import"./NavigationGroup-D-BaHXXX.js";import"./Notification-Bk0gzbnY.js";import"./NotificationProvider-DDhJ45Ji.js";import"./ProgressBar-B3o_BSDC.js";import"./Rating-BN3HDW9p.js";import"./Skeleton-C5PIlGkF.js";const P=(e=g)=>{const a=w.useMemo(()=>E.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return C(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:L}=__STORYBOOK_MODULE_ACTIONS__,v=L("submit"),j={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[R.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),v(s)},a=f({defaultValues:{user:""}}),m=y();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(B,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:P()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(S,{children:[r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:P(j)},name:"password",children:r.jsxs(n,{validationPolicy:j,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return w.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"}),r.jsx(V,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(t,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(x,{children:"Reset"}),r.jsx(b,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
