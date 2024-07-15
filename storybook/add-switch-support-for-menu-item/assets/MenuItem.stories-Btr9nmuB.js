import{C as n,a as c,M as r}from"./ContextMenuTrigger-CEnxFcpH.js";import{B as a}from"./Button-CE1BCqF-.js";import{c as h,a as I}from"./IconApp-D9YGKrkS.js";import{T as p}from"./Text-CKjZYOWy.js";import{S}from"./Switch-B5gETZiv.js";import{R as e}from"./index-BwDkhjyp.js";import"./ContextMenu.module-CAjBRoKS.js";import"./flowComponent-L8FZPC_o.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PopoverTrigger-Bmry37I8.js";import"./OverlayTrigger-DAcHIpQJ.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-74RQSP_w.js";import"./useFocusable-CKMlalor.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-YR3pmEr9.js";import"./FocusScope-DW-lXgh3.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BSWHffzG.js";import"./context-apusqW7x.js";import"./useSelector-BudK-1xR.js";import"./Action-CGXqiLzQ.js";import"./dynamic-DKDa4OpU.js";import"./IconWarning-B77fLmlz.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./Separator-CGt9BNMq.js";import"./Text-C_suByGF.js";import"./useMenuTrigger-CyXVQiVd.js";import"./SelectionManager-BD-OU06l.js";import"./useEvent-m5sATXdH.js";import"./LoadingSpinner-WO6qy2zn.js";import"./Button-BTMfZQLF.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Label-DmmpejK1.js";import"./Label-DwL17Jrp.js";import"./useToggleState-BohumPZ6.js";import"./useFormReset-CfqvoD0r.js";/**
 * @license @tabler/icons-react v3.9.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var T=h("outline","bell-ringing","IconBellRinging",[["path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",key:"svg-0"}],["path",{d:"M9 17v1a3 3 0 0 0 6 0v-1",key:"svg-1"}],["path",{d:"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727",key:"svg-2"}],["path",{d:"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727",key:"svg-3"}]]);const Ie={title:"Navigation/MenuItem",component:n,render:t=>e.createElement(c,null,e.createElement(a,null,"Trigger"),e.createElement(n,{...t},e.createElement(r,{id:"item1"},"Item 1"),e.createElement(r,{id:"item2"},"Item 2"),e.createElement(r,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={render:t=>e.createElement(c,null,e.createElement(a,null,"Trigger"),e.createElement(n,{...t},e.createElement(r,{id:"subscribe"},e.createElement(I,null,e.createElement(T,null)),e.createElement(p,null,"Subscribe"))))},i={render:t=>e.createElement(c,null,e.createElement(a,null,"Trigger"),e.createElement(n,{...t},e.createElement(r,{id:"subscribe"},e.createElement(p,null,"Subscribe"),e.createElement(S,{isSelected:!0}))))},m={render:t=>e.createElement(c,null,e.createElement(a,null,"Trigger"),e.createElement(n,{...t},e.createElement(r,{id:"subscribe"},e.createElement(I,null,e.createElement(T,null)),e.createElement(p,null,"Subscribe"),e.createElement(S,{isSelected:!0}))))};var l,s,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem id="subscribe">
          <Icon>
            <IconBellRinging />
          </Icon>
          <Text>Subscribe</Text>
        </MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var g,d,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem id="subscribe">
          <Text>Subscribe</Text>
          <Switch isSelected={true} />
        </MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(E=(d=i.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};var M,b,x;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem id="subscribe">
          <Icon>
            <IconBellRinging />
          </Icon>
          <Text>Subscribe</Text>
          <Switch isSelected={true} />
        </MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const Se=["WithIcon","WithSwitch","WithIconAndSwitch"];export{o as WithIcon,m as WithIconAndSwitch,i as WithSwitch,Se as __namedExportsOrder,Ie as default};
