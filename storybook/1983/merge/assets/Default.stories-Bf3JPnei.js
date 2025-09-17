import{r as x,j as e}from"./iframe-BAGTntfB.js";import{F as t}from"./FileDropZone-CYomNkKK.js";import{S as u}from"./Section-ytSv1zvn.js";import{F}from"./FileCardList-BHctPQGi.js";import{F as f}from"./FileCard-BbbRp8O3.js";import{u as E,F as W,t as G}from"./Form-CY4BaXMY.js";import{B as s}from"./Button-ClQyukEh.js";import{A as M}from"./ActionGroup-kXE27rBg.js";import{_ as j,$ as q}from"./IconWarning-SECJkQke.js";import{H as g}from"./Heading-B2joHeSr.js";import{F as h}from"./FileField-a_36Px0D.js";import{T as v}from"./Text-oSCAFhn5.js";import"./IllustratedMessage-Uqna4a6U.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVEq68NN.js";import"./mergeRefs-Ct4YEWrU.js";import"./index-TExY8AE4.js";import"./utils-DSdQ5U5C.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CZggwRKM.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jLc0StSH.js";import"./useFocus-kqlw9bYS.js";import"./useCollator-C2nKvxEE.js";import"./context-C8vSVPtT.js";import"./useLocalizedStringFormatter-DdilTbMd.js";import"./Button-DldLr0Dh.js";import"./ProgressBar-yPlEiM2Y.js";import"./Label-CWJf374V.js";import"./Hidden-BFcGcOTS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BeTrTVD4.js";import"./useFocusRing-uRy9P7F2.js";import"./useFocusable-CvI8LjKe.js";import"./VisuallyHidden-CCDJ4X70.js";import"./ContextMenuSection-BeQzdxEY.js";import"./Action-BhAAiBfS.js";import"./context-B68punRm.js";import"./useStatic-B7HpxjOi.js";import"./browser-D8tJ8M3I.js";import"./getActionGroupSlot-Bf03GRoZ.js";import"./dynamic-DicyFJZ2.js";import"./Popover-DIu09GMY.js";import"./DialogTriggerView-BimJk9-6.js";import"./RSPContexts-u_LIQrA5.js";import"./OverlayArrow-CIJbDC1X.js";import"./useControlledState-hqI-vqoJ.js";import"./FocusScope-Dx9vsLFf.js";import"./Collection-CyU2lrEr.js";import"./CollectionBuilder-BjHCxw5W.js";import"./Separator-BoyfOubv.js";import"./Group-CQeggyQD.js";import"./SearchField-BATSQzLF.js";import"./FieldError-DwSlV6wI.js";import"./Form-BImra2vo.js";import"./useTextField-aRRnCdTt.js";import"./useFormReset-DMVQ-F_N.js";import"./TextField-CGb-3Yan.js";import"./useEvent-DLvyF1-Y.js";import"./SelectionManager-DNLJemTe.js";import"./Switch-DxFGgU8l.js";import"./Label-f9Yl8NxA.js";import"./useToggleState-B4DVcZDp.js";import"./ColumnLayout-Vc0GS06o.js";import"./Avatar-C2jVxtbZ.js";import"./AlertIcon-MtkhnR0I.js";import"./Image-Dea9xLny.js";import"./Link-BXUK7PeU.js";import"./ButtonView-DJZ5qxe4.js";import"./ContextMenuTriggerView-h-9Wmj4W.js";import"./FieldError-CzxDQYV0.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-DuAh__4X.js";import"./Heading-qcJaN4U_.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-hfJfJt2X.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
