import{j as r}from"./iframe-BrRYKFNZ.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BeyOYKIy.js";import{L as m}from"./Link-DSSj8ydA.js";import{H as s}from"./HeaderNavigation-z0ytTCJg.js";import{B as o}from"./Button-C60cqGfK.js";import{T as p}from"./Text-BQhotjr-.js";import{I as h}from"./Image-BY-UfD-H.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DQBZ_YZj.js";import{C as M,M as c}from"./MenuItem-JsMD3fFQ.js";import{C as I}from"./ContextMenuTrigger-BYCzA1th.js";import"./ContextMenuSection-CWAGy83O.js";import{a as T,M as k}from"./Modal-DcLoSY0Q.js";import{H}from"./Heading-BEvNp9N_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./index--DYCSdQe.js";import"./remote-CSM401Gb.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./context-CNZG124A.js";import"./utils-B1YhIU5r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Br7iUm-k.js";import"./usePress-fw0Lqzwn.js";import"./useFocusRing-DN4mDdXp.js";import"./useFocusable-NfSEA2Af.js";import"./dynamic-CVEHQCEx.js";import"./LoadingSpinner-Djs3hRtr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B8owV-WL.js";import"./ProgressBar-B9sQkIOL.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./useLabel-B8Txg4ii.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-rpb3JyGK.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./Text-C7DedtDs.js";import"./AlertIcon-B-O3oopm.js";import"./Action-D8nw7HFc.js";import"./context-CrKKxYCQ.js";import"./useStatic-CMNgov9B.js";import"./getActionGroupSlot-BX1oqOED.js";import"./Popover-C9Fh-oR7.js";import"./useOverlayController-Okmjmi6H.js";import"./OverlayContextProvider-Cf_qIYKP.js";import"./Dialog-CrRUDPQZ.js";import"./RSPContexts-Cc3CuTB3.js";import"./OverlayArrow-O3cIaLnV.js";import"./useControlledState-BbGuTZMM.js";import"./Collection-BSmX4ivX.js";import"./CollectionBuilder-yxebjIxP.js";import"./SelectionIndicator-DkMRnaGM.js";import"./Separator-Cwa9_Y9_.js";import"./SelectionManager-C85L77I5.js";import"./useEvent-D5Z7Dnjm.js";import"./useCollator-C7d0Ik_Q.js";import"./FocusScope-C9Un_YW5.js";import"./VisuallyHidden-VjzJwiBh.js";import"./Switch-BVlfE34l.js";import"./useFieldComponent-D0nvFHA9.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CxSzAxcM.js";import"./useFormReset-9TaX9dD_.js";import"./OverlayTrigger-D29G-Fo8.js";import"./DialogTriggerView-BsKP-m9v.js";import"./Overlay-BW6fmSpy.js";import"./ButtonView-CpxOXa2e.js";import"./Flex-B41x3eF3.js";import"./Heading-DT_vZFGH.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
