import{j as r,r as g}from"./iframe-BD-_0iQW.js";import{u as c,F as d,t as b,c as h}from"./Form-3QX93OZP.js";import{R as F,S as x}from"./ResetButton-6xPBuxy5.js";import{B as f}from"./Button-Daqq-bhO.js";import{S as E}from"./Section-Bcwz73Fs.js";import{A as T}from"./ActionGroup-L6iCTp2m.js";import{s as u}from"./Action-DGkp9jQR.js";import{A as i,T as p,F as B,O as A}from"./Modal-DAvTyZys.js";import{L as l}from"./Label-BHkQ1Mdn.js";import"./index-nuYtCEEu.js";import"./dynamic-Bn8R82lj.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./clsx-B-dksMZM.js";import"./index-CwlJevdL.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./context-CVtdtufW.js";import"./browser-CsfwbWLp.js";import"./utils-DC-uQ7gt.js";import"./IconWarning-COe6pc-P.js";import"./Text-BiRW2WuP.js";import"./EmulatedBoldText-C35HxZ7Y.js";import"./LoadingSpinner-BgQGLDYl.js";import"./Button-DxIzcvDZ.js";import"./ProgressBar-DRtXHYQ6.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ohgATb1P.js";import"./useFocusable-DN1gz0ZC.js";import"./Dialog-B7aUPBh_.js";import"./RSPContexts-CSfMLF9v.js";import"./OverlayArrow-Roh2YmoW.js";import"./useControlledState-B9_9qNA0.js";import"./Collection-DmyA85a8.js";import"./CollectionBuilder-BVb55qBm.js";import"./SelectionIndicator-BYFUj2bk.js";import"./Separator-BuFHs16i.js";import"./getActionGroupSlot-DF5uOUtt.js";import"./useStatic-7iZUYjuS.js";import"./context-9lnVgACy.js";import"./Popover-CLHMqo5N.js";import"./OverlayTrigger-CEYU_-ng.js";import"./ControlledNotification-B9B4fBZF.js";import"./ClearPropsContextView-C6q86AoL.js";import"./LayoutCard-Bu_MxQLX.js";import"./Accordion-Dmvu-STy.js";import"./Alert-BHqt2Xmz.js";import"./AlertIcon-C-1FhtD4.js";import"./AlertBadge-C_bKX3Tw.js";import"./Align-BU9LqP1d.js";import"./TableFooterRow-Dh87MABj.js";import"./SkeletonText-BEBErV7l.js";import"./Avatar-ptAthZyD.js";import"./AvatarStack-pX77Wx2n.js";import"./Badge-Cq8W5IuK.js";import"./BigNumber-BZMSwxWy.js";import"./Breadcrumb-B_2EqmLA.js";import"./Link--c0KgJdM.js";import"./Heading-CKSpOG-B.js";import"./Legend-Dt8JNF07.js";import"./FileCardList-CoobVF0p.js";import"./Image-wyVjZedI.js";import"./CodeBlock-B7SIDcrt.js";import"./CopyButton-DNanLKd-.js";import"./Tooltip-CQSPANHc.js";import"./react-children-utilities-CYfepbhx.js";import"./Color-CKMFQpU8.js";import"./Content-D_2aIVNk.js";import"./ContextualHelpTrigger-ChW-2k3k.js";import"./CounterBadge-zIMO9qVK.js";import"./DonutChart--oUMGKT6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGcFcvk0.js";import"./Header-w0dLREy2.js";import"./Initials-sAJyyrQ_.js";import"./InlineCode-DOqa4S9W.js";import"./LabeledValue-BJ2qJMnJ.js";import"./PopoverTrigger-DQLZ359g.js";import"./Markdown-gIXFEqIp.js";import"./Separator-BuhULCN1.js";import"./Message-D5ycG96F.js";import"./MessageSeparator-1pn-RMid.js";import"./NavigationGroup-D-BaHXXX.js";import"./Notification-Bk0gzbnY.js";import"./NotificationProvider-DDhJ45Ji.js";import"./ProgressBar-B3o_BSDC.js";import"./Rating-BN3HDW9p.js";import"./Skeleton-C5PIlGkF.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,O=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(t=>{const e=`${o.split("@")[0]}@${t}`;return r.jsx(A,{value:e,textValue:e,children:e},e)}),pt={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),O(S)},t=c({defaultValues:{email:""}}),e=b(),j=t.watch("email");return r.jsx(d,{form:t,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(e,{name:"email",children:r.jsxs(i,{children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:o=>{const t=c();g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(e)]})]})}},s={render:o=>{const t=c(),e=t.watch("field");return r.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(p,{children:r.jsx(l,{children:"Test"})}),a(e)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...s.parameters?.docs?.source}}};const lt=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,s as WithFocus,lt as __namedExportsOrder,pt as default};
