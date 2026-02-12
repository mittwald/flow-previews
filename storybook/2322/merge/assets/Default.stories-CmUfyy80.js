import{j as r}from"./iframe-BECefjM4.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CvVn1QxU.js";import{L as m}from"./Link-CJeQaYrr.js";import{H as s}from"./HeaderNavigation-Ca0A8LZj.js";import{B as o}from"./Button-DAjxqCNq.js";import{T as p}from"./Text-lZ2PbEqF.js";import{I as h}from"./Image-CkO53M69.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Nk6lrNKm.js";import{C as M,M as c}from"./MenuItem-DKNI6zyS.js";import{C as I}from"./ContextMenuTrigger-B8mVW8QD.js";import"./ContextMenuSection-C8VBWo1V.js";import{M as T}from"./ModalTrigger-Dy8aq5QF.js";import{M as k}from"./Modal-BdrjL7gW.js";import{H}from"./Heading-CqTYuCig.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./index-BGQ8HYEh.js";import"./remote-CqI4D0us.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./context-iJTSqlsV.js";import"./utils-bqUpXLHN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CIRpkrn7.js";import"./usePress-427CihAL.js";import"./useFocusRing-DIpVtkGc.js";import"./useFocusable-DTBBh1VF.js";import"./dynamic-DJ76M0aZ.js";import"./LoadingSpinner-DXxHNnrx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CUoWVSdf.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./useLabel-d0BVjP-J.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./Text-IrzRAzMs.js";import"./AlertIcon-B57cAQNM.js";import"./ActionBatch-DZRJQ0Jr.js";import"./context-mnhTcWwX.js";import"./useStatic-Bcu2QKMg.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./Popover-BRqnQ0aL.js";import"./useOverlayController-7vnF_84u.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./Dialog-BvIZXNXz.js";import"./RSPContexts-C61Ijawi.js";import"./OverlayArrow-C6gZr2kK.js";import"./useControlledState-2Tdfwl5E.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./SelectionIndicator-B2vofSgQ.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./useCollator-r-PMcESO.js";import"./FocusScope-CjCXh94P.js";import"./VisuallyHidden-GWiC-wFe.js";import"./Switch-3UuRYh1K.js";import"./useFieldComponent-B5iNz-5m.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-GiDT7pFW.js";import"./useFormReset-CDquwT_C.js";import"./OverlayTrigger-Cg8XmR5v.js";import"./DialogTriggerView-Dgo2WbQG.js";import"./Overlay-yXgmDyXI.js";import"./ButtonView-C56jVANI.js";import"./Flex-BjbASY3g.js";import"./Heading-Brz3JFJA.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,zr as __namedExportsOrder,wr as default};
