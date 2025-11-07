import{j as r,r as x}from"./iframe-BD-_0iQW.js";import{c as a,u as p,F as l,t as j}from"./Form-3QX93OZP.js";import{L as o}from"./Label-BHkQ1Mdn.js";import{R as c,S as f}from"./ResetButton-6xPBuxy5.js";import{B as u}from"./Button-Daqq-bhO.js";import{S as g}from"./Section-Bcwz73Fs.js";import{A as b}from"./ActionGroup-L6iCTp2m.js";import{s as d}from"./Action-DGkp9jQR.js";import{N as t,p as E,F as S}from"./Modal-DAvTyZys.js";import"./index-nuYtCEEu.js";import"./dynamic-Bn8R82lj.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./clsx-B-dksMZM.js";import"./index-CwlJevdL.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./context-CVtdtufW.js";import"./browser-CsfwbWLp.js";import"./utils-DC-uQ7gt.js";import"./ProgressBar-DRtXHYQ6.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-COe6pc-P.js";import"./Text-BiRW2WuP.js";import"./EmulatedBoldText-C35HxZ7Y.js";import"./LoadingSpinner-BgQGLDYl.js";import"./Button-DxIzcvDZ.js";import"./useFocusRing-ohgATb1P.js";import"./useFocusable-DN1gz0ZC.js";import"./Dialog-B7aUPBh_.js";import"./RSPContexts-CSfMLF9v.js";import"./OverlayArrow-Roh2YmoW.js";import"./useControlledState-B9_9qNA0.js";import"./Collection-DmyA85a8.js";import"./CollectionBuilder-BVb55qBm.js";import"./SelectionIndicator-BYFUj2bk.js";import"./Separator-BuFHs16i.js";import"./getActionGroupSlot-DF5uOUtt.js";import"./useStatic-7iZUYjuS.js";import"./context-9lnVgACy.js";import"./Popover-CLHMqo5N.js";import"./OverlayTrigger-CEYU_-ng.js";import"./ControlledNotification-B9B4fBZF.js";import"./ClearPropsContextView-C6q86AoL.js";import"./LayoutCard-Bu_MxQLX.js";import"./Accordion-Dmvu-STy.js";import"./Alert-BHqt2Xmz.js";import"./AlertIcon-C-1FhtD4.js";import"./AlertBadge-C_bKX3Tw.js";import"./Align-BU9LqP1d.js";import"./TableFooterRow-Dh87MABj.js";import"./SkeletonText-BEBErV7l.js";import"./Avatar-ptAthZyD.js";import"./AvatarStack-pX77Wx2n.js";import"./Badge-Cq8W5IuK.js";import"./BigNumber-BZMSwxWy.js";import"./Breadcrumb-B_2EqmLA.js";import"./Link--c0KgJdM.js";import"./Heading-CKSpOG-B.js";import"./Legend-Dt8JNF07.js";import"./FileCardList-CoobVF0p.js";import"./Image-wyVjZedI.js";import"./CodeBlock-B7SIDcrt.js";import"./CopyButton-DNanLKd-.js";import"./Tooltip-CQSPANHc.js";import"./react-children-utilities-CYfepbhx.js";import"./Color-CKMFQpU8.js";import"./Content-D_2aIVNk.js";import"./ContextualHelpTrigger-ChW-2k3k.js";import"./CounterBadge-zIMO9qVK.js";import"./DonutChart--oUMGKT6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGcFcvk0.js";import"./Header-w0dLREy2.js";import"./Initials-sAJyyrQ_.js";import"./InlineCode-DOqa4S9W.js";import"./LabeledValue-BJ2qJMnJ.js";import"./PopoverTrigger-DQLZ359g.js";import"./Markdown-gIXFEqIp.js";import"./Separator-BuhULCN1.js";import"./Message-D5ycG96F.js";import"./MessageSeparator-1pn-RMid.js";import"./NavigationGroup-D-BaHXXX.js";import"./Notification-Bk0gzbnY.js";import"./NotificationProvider-DDhJ45Ji.js";import"./ProgressBar-B3o_BSDC.js";import"./Rating-BN3HDW9p.js";import"./Skeleton-C5PIlGkF.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),me={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await d(1500),B(F)},h=p({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=p({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=p({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const se=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,se as __namedExportsOrder,me as default};
