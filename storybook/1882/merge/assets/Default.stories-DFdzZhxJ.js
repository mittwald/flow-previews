import{j as r}from"./iframe-TjmQ4-hc.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-1inC7auC.js";import{L as m}from"./Link-X4gYmyl2.js";import{H as s}from"./HeaderNavigation-DG7SPT5W.js";import{B as o}from"./Button-CjK60Gy6.js";import{T as p}from"./Text-B1ccA9_H.js";import{I as C}from"./Image-CWMjHLhc.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar--glDpGAt.js";import{a as y,C as A,M as c}from"./ContextMenuContent-M0YhW77o.js";import"./ContextMenuSection-C2WKk6Hp.js";import{a as D,M as E}from"./Modal-CFEwH63v.js";import{H as G}from"./Heading-Cig5HHsR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./context-R7iXnnvL.js";import"./utils-DD1RW9f4.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BK59oRjy.js";import"./useFocus-Bp-EL3Xp.js";import"./useFocusRing-D7ZBK5Fy.js";import"./useFocusable-BjM2CItA.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-NnONiqHm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ZmvxJ__-.js";import"./ProgressBar-BJaRqoq-.js";import"./Label-bbA9jqHU.js";import"./Hidden-30ERZiSw.js";import"./useLabel-d8aoteAS.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CuXK39lt.js";import"./EmulatedBoldText-CMH1yXpY.js";import"./Text-C2aObJTh.js";import"./AlertIcon-TNLy8y1j.js";import"./Action-B2WqKUlH.js";import"./context-Brmjsdqe.js";import"./useStatic-r5kIO8BX.js";import"./getActionGroupSlot-CibZr1oe.js";import"./Popover-Gm7nYTUR.js";import"./DialogTriggerView-CaZEWSSp.js";import"./Dialog-BYQB8QOB.js";import"./RSPContexts-DCrZu0Mf.js";import"./OverlayArrow-Dfaoqrsw.js";import"./useControlledState-Cdf0eZg6.js";import"./Collection-CamF85rx.js";import"./CollectionBuilder-JPu6hEsl.js";import"./Separator-CcxH-z50.js";import"./Group-9f-8oWvR.js";import"./SearchField-DwL5wZDS.js";import"./FieldError-Bn62nal0.js";import"./Form-Bwnncz0S.js";import"./useTextField-FvWzbSPw.js";import"./useFormReset-CwwzwEJM.js";import"./TextField-BMUXjdB8.js";import"./useEvent-lWEWCECp.js";import"./SelectionManager-uQED9UcT.js";import"./useCollator-mmVXCJGc.js";import"./FocusScope-DiLIjyrf.js";import"./VisuallyHidden-EAsiRlUn.js";import"./Switch--YPpjeD6.js";import"./Label-_xLVsaVJ.js";import"./useToggleState-CoQV3DJE.js";import"./Overlay-CNLJCBuj.js";import"./ButtonView-DUkUqB3Y.js";import"./Heading-WZScnp-T.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
