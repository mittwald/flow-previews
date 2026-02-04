import{j as r}from"./iframe-CBdrHiu-.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-B89fpQti.js";import{L as m}from"./Link-Dv8vhFUP.js";import{H as s}from"./HeaderNavigation-CIrf7bjm.js";import{B as o}from"./Button-CvrzgGgN.js";import{T as p}from"./Text-vxOKNzxr.js";import{I as h}from"./Image-BuPOPW8V.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BKBgfR9n.js";import{C as M,M as c}from"./MenuItem-CN438eQs.js";import{C as I}from"./ContextMenuTrigger-BpyTR-jF.js";import"./ContextMenuSection-DKWGDRRC.js";import{a as T,M as k}from"./Modal-DPAXw14V.js";import{H}from"./Heading-B0bk6t16.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./index-DbZpFDe3.js";import"./remote-SRpD7Y2I.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./context-p6nKBAyO.js";import"./utils-DRjcKwJb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BOx7sVQU.js";import"./usePress-BNG00Dag.js";import"./useFocusRing-CFSl2bW1.js";import"./useFocusable-DA2EU5Pw.js";import"./dynamic-Cbo9i_64.js";import"./LoadingSpinner-B7nOYR-m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGOdyj-q.js";import"./ProgressBar-DeVRnANw.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./useLabel-CJjwA-2F.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DtunHlVO.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./Text-DKFtzua6.js";import"./AlertIcon-DkcKW-cj.js";import"./Action-CcGGE6B7.js";import"./context-RwMuvTef.js";import"./useStatic-Bx0cFIOO.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./Popover-Blf-QLvj.js";import"./useOverlayController-s1zH8rAH.js";import"./OverlayContextProvider-DtYcAWZK.js";import"./Dialog-C9BJ8Byi.js";import"./RSPContexts-B6JknHHE.js";import"./OverlayArrow-C9WHoJ1C.js";import"./useControlledState-H50OY390.js";import"./Collection-vGtYQGRh.js";import"./CollectionBuilder-CquvtT24.js";import"./SelectionIndicator-CeaIsc91.js";import"./Separator-CTAmEu9t.js";import"./SelectionManager-B98Z3aaT.js";import"./useEvent-CaW49TJY.js";import"./useCollator-DAsNNJgX.js";import"./FocusScope-CTh9v3q6.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./Switch-DWAzEHee.js";import"./useFieldComponent-CkNNSE-6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-WK2rrRWv.js";import"./useFormReset-DzYWM4EU.js";import"./OverlayTrigger-CiCUVE66.js";import"./DialogTriggerView-BNPiMxHz.js";import"./Overlay-CYyQM3cH.js";import"./ButtonView-gSA2DBTv.js";import"./Flex-CCesSReR.js";import"./Heading-BzPKH39A.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
